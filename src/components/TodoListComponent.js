import React from 'react';
import Paper from 'material-ui/Paper';
import RadioButton from 'material-ui/RadioButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

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

export default class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
  }

  componentDidMount() {
    this.setState({
      todoItems: [{ taskName: 'Buy Milk' }]
    });
  }

  render() {
    return <TodoListItem todoItems={this.state.todoItems} />;
  }
}
