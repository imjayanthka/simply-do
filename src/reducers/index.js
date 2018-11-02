import { ADD_TODO, TOGGLE_ADD_FORM } from '../cosntants/action-types';

const initalState = {
  todoListItems: [],
  addToDoButtonClicked: false
};

const rootRedcuer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_FORM:
      return { ...state, addToDoButtonClicked: !state.addToDoButtonClicked };
    case ADD_TODO:
      return {
        ...state,
        addToDoButtonClicked: !state.addToDoButtonClicked,
        todoListItems: [...state.todoListItems, action.payload]
      };
    default:
      return state;
  }
};

export default rootRedcuer;
