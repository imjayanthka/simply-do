import {
  ADD_TODO,
  TOGGLE_ADD_FORM,
  TOGGLE_TODO
} from '../cosntants/action-types';

export const addToDo = todo => ({ type: ADD_TODO, payload: todo });

export const toggleAddForm = () => ({ type: TOGGLE_ADD_FORM, payload: null });

export const toggleTodoStatus = todo => ({ type: TOGGLE_TODO, payload: todo });
