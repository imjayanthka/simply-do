import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addToDo } from "../actions/index";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const mapDispatchToProps = dispatch => {
	return {
		addToDo: todo => dispatch(addToDo(todo))
	};
};

class ConnectedToDoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: ""
		};
	}

	handleOnClose = () => {
		this.setState({ taskName: "" });
		this.props.onClose();
	};

	handleOnChange = event => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		const { taskName } = this.state;
		this.props.addToDo({ id: uuid(taskName), taskName, isCompleted: false });
		this.setState({ taskName: "" });
	};

	render() {
		const { onClose, addToDo, ...other } = this.props;
		const { taskName } = this.state;
		return (
			<Dialog onClose={this.handleOnClose} {...other}>
				<DialogTitle>Add New Task</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="taskName"
						label="Task Name"
						value={taskName}
						onChange={this.handleOnChange}
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleOnClose} color="primary">
						Cancel
					</Button>
					<Button onClick={this.handleSubmit} color="primary">
						Save
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

ConnectedToDoItem.propTypes = {
	onClose: PropTypes.func
};

const AddToDoItem = connect(
	null,
	mapDispatchToProps
)(withStyles({})(ConnectedToDoItem));

export default AddToDoItem;
