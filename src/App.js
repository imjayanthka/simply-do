import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TodoListComponent from './components/TodoListComponent';
import AddTodoItem from './components/AddTodoItem';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="Personal To Do" />
        <TodoListComponent />
        <AddTodoItem />
      </MuiThemeProvider>
    );
  }
}

export default App;
