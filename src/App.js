import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TodoListComponent from './components/TodoListComponent';
import AddTodoItemButton from './components/AddTodoItemButton';
import AddToDoItem from './components/AddToDoItem';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = state => {
  return { addToDoButtonClicked: state.addToDoButtonClicked };
};

const ConnectedApp = ({ addToDoButtonClicked }) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <AppBar title="Personal To Do" />
      {!addToDoButtonClicked && <TodoListComponent />}
      {addToDoButtonClicked && <AddToDoItem />}
      {!addToDoButtonClicked && <AddTodoItemButton />}
    </MuiThemeProvider>
  );
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
