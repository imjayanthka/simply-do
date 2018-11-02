import { ADD_TODO } from '../cosntants/action-types';

const initalState = {
  todoListItems: []
};

const rootRedcuer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoListItems: [...state.todoListItems, action.payload]
      };
    default:
      return state;
  }
};

export default rootRedcuer;
