import {
	ADD_TODO,
	TOGGLE_ADD_FORM,
	TOGGLE_TODO,
	FILTER_COMPLETED_TASKS,
	FILTER_ALL_TODOS,
	FILTER_PENDING_TODOS,
	CHANGE_SELECTED_TAB
} from "../cosntants/action-types";

export const addToDo = todo => ({ type: ADD_TODO, payload: todo });

export const toggleAddForm = () => ({ type: TOGGLE_ADD_FORM, payload: null });

export const toggleTodoStatus = todo => ({ type: TOGGLE_TODO, payload: todo });

export const filterCompletedTasks = () => ({
	type: FILTER_COMPLETED_TASKS,
	payload: null
});

export const filterAllTodos = () => ({
	type: FILTER_ALL_TODOS,
	payload: null
});

export const filterPendingTasks = () => ({
	type: FILTER_PENDING_TODOS,
	payload: null
});

export const changeSelectedTab = selectedTab => ({
	type: CHANGE_SELECTED_TAB,
	payload: selectedTab
});
