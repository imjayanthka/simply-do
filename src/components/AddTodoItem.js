import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addToDo: todo => dispatch(addToDo(todo))
  };
};

class ConnectedToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      taskName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { taskName } = this.state;
    this.props.addToDo({ taskName });
    this.setState({ taskName: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const AddToDoItem = connect(
  null,
  mapDispatchToProps
)(ConnectedToDoItem);

export default AddToDoItem;
