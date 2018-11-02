import { ADD_TODO } from '../cosntants/action-types';

export const addToDo = todo => ({ type: ADD_TODO, payload: todo });
