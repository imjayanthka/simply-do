import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { toggleAddForm } from "../actions/index";

const mapDispatchToProps = dispatch => {
	return {
		toggleAddForm: () => dispatch(toggleAddForm())
	};
};

class ConnectedAddTodoItemButton extends React.Component {
	constructor() {
		super();
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(event) {
		this.props.toggleAddForm();
	}

	render() {
		return (
			<Button
				variant="fab"
				className="add-item-button"
				onClick={this.handleOnClick}
			>
				<AddIcon />
			</Button>
		);
	}
}

const AddTodoItemButton = connect(
	null,
	mapDispatchToProps
)(ConnectedAddTodoItemButton);

export default AddTodoItemButton;
