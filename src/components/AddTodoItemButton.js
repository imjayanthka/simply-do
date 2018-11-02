import React from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { toggleAddForm } from '../actions/index';

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
      <FloatingActionButton
        className="add-item-button"
        onClick={this.handleOnClick}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

const AddTodoItemButton = connect(
  null,
  mapDispatchToProps
)(ConnectedAddTodoItemButton);

export default AddTodoItemButton;
