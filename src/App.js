import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TodoListComponent from "./components/TodoListComponent";
import AddTodoItemButton from "./components/AddTodoItemButton";
import AddToDoItem from "./components/AddToDoItem";
import { toggleAddForm } from "./actions/index";
import { connect } from "react-redux";
import "./App.css";

const theme = createMuiTheme({
	palette: {
		type: "dark" // Switching the dark mode on is a single property value change.
	},
	typography: {
		useNextVariants: true
	}
});

const mapStateToProps = state => {
	return { addToDoButtonClicked: state.addToDoButtonClicked };
};

const mapDispatchToProps = dispatch => {
	return {
		toggleAddForm: () => dispatch(toggleAddForm())
	};
};

class ConnectedApp extends React.Component {
	handleOnClose = () => {
		this.props.toggleAddForm();
	};

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							Personal To Do
						</Typography>
					</Toolbar>
				</AppBar>
				{!this.props.addToDoButtonClicked && <TodoListComponent />}
				<AddToDoItem
					open={this.props.addToDoButtonClicked}
					onClose={this.handleOnClose}
				/>
				{!this.props.addToDoButtonClicked && <AddTodoItemButton />}
			</MuiThemeProvider>
		);
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedApp);

export default App;
