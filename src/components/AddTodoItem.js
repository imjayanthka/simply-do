import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddTodoItem extends React.Component {
  render() {
    return (
      <FloatingActionButton className="add-item-button">
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
