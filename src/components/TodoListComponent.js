import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { List, ListItem, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import { toggleTodoStatus, deleteTodoItem } from "../actions/index";

import TodoStatusTabs from "./TodoStatusTabs";

const mapStateToProps = state => {
  return {
    todoListItems: state.todoListItems,
    totalTasks: state.totalTasks,
    selectedTab: state.selectedTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoStatus: todo => dispatch(toggleTodoStatus(todo)),
    deleteTodoItem: todo => dispatch(deleteTodoItem(todo))
  };
};

const ConnectedTodoListItem = ({
  todoListItems,
  totalTasks,
  toggleTodoStatus,
  deleteTodoItem,
  selectedTab
}) => {
  if (totalTasks === 0) {
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
      <div>
        <TodoStatusTabs />
        {todoListItems && todoListItems.length !== 0 && (
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
                  <IconButton
                    aria-label="Delete"
                    className="delete-button"
                    onClick={() => deleteTodoItem(todoItem)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        )}
        {!todoListItems && todoListItems.length === 0 && (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="no-items-container"
          >
            {`Yay. You have ${
              selectedTab === 1
                ? "no pending tasks"
                : selectedTab === "2"
                ? "not completed any task"
                : ""
            }.`}
            s
          </Grid>
        )}
      </div>
    );
  }
};

const TodoListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTodoListItem);

export default TodoListComponent;
