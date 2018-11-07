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
		toggleTodoStatus: todo => dispatch(toggleTodoStatus(todo))
	};
};

const ConnectedTodoListItem = ({ todoListItems, toggleTodoStatus }) => {
	if (todoListItems && todoListItems.length === 0) {
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
				{todoListItems.map(todoItem => (
					<div key={todoItem.id}>
						<ListItem className="list-item-container">
							<FormControlLabel
								control={
									<Checkbox
										checked={todoItem.isCompleted}
										onChange={() => toggleTodoStatus(todoItem)}
										value={todoItem.id}
										color="primary"
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
};

const TodoListComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedTodoListItem);

export default TodoListComponent;
