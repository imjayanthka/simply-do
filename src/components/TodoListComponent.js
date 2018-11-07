import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { List, ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { toggleTodoStatus } from "../actions/index";

const mapStateToProps = state => {
	return { todoListItems: state.todoListItems };
};

const mapDispatchToProps = dispatch => {
	return {
		toggleTodoStatus: () => dispatch(toggleTodoStatus())
	};
};

class TodoListItem extends React.Component {
	handleToogleTaskCompletion = event => {
		console.log("handleToogleTaskCompletion");
	};

	render() {
		if (this.props.todoItems && this.props.todoItems.length === 0) {
			return (
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					className="no-items-container"
				>
					Yay. You have completed all your tasks.
				</Grid>
			);
		} else {
			return (
				<List>
					{this.props.todoItems.map(todoItem => (
						<div>
							<ListItem key={todoItem.id} class="list-item-container">
								<FormControlLabel
									control={
										<Checkbox
											checked={todoItem.isCompleted}
											onChange={this.handleToogleTaskCompletion}
											value="checkedG"
										/>
									}
									label={todoItem.taskName}
								/>
							</ListItem>
							<Divider />
						</div>
					))}
				</List>
			);
		}
	}
}

const ConnectedTodoListComponent = ({ todoListItems }) => {
	return <TodoListItem todoItems={todoListItems} />;
};

const TodoListComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedTodoListComponent);

export default TodoListComponent;
