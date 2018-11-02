import { ADD_TODO, TOGGLE_ADD_FORM } from '../cosntants/action-types';

export const addToDo = todo => ({ type: ADD_TODO, payload: todo });

export const toggleAddForm = () => ({ type: TOGGLE_ADD_FORM, paylod: null });
