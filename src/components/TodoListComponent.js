import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RadioButton from 'material-ui/RadioButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const mapStateToProps = state => {
  return { todoListItems: state.todoListItems };
};

class TodoListItem extends React.Component {
  render() {
    if (this.props.todoItems && this.props.todoItems.length === 0) {
      return (
        <Paper>
          <div className="no-items-container">
            Yay. You have completed all your tasks.
          </div>
        </Paper>
      );
    } else {
      return (
        <List>
          {this.props.todoItems.map(todoItem => (
            <Paper className="list-item-container">
              <ListItem>
                <RadioButton value="light" label={todoItem.taskName} />
              </ListItem>
              <Divider />
            </Paper>
          ))}
        </List>
      );
    }
  }
}

const ConnectedTodoListComponent = ({ todoListItems }) => {
  return <TodoListItem todoItems={todoListItems} />;
};

const TodoListComponent = connect(mapStateToProps)(ConnectedTodoListComponent);

export default TodoListComponent;
