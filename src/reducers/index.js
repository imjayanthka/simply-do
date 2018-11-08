import {
	ADD_TODO,
	TOGGLE_ADD_FORM,
	TOGGLE_TODO,
	FILTER_COMPLETED_TASKS,
	FILTER_ALL_TODOS,
	FILTER_PENDING_TODOS,
	CHANGE_SELECTED_TAB
} from "../cosntants/action-types";

var masterTodoList = [];

const initalState = {
	todoListItems: [],
	addToDoButtonClicked: false,
	selectedTab: 0,
	totalTasks: 0
};

const addToDoItemHelper = todo => {
	masterTodoList = [...masterTodoList, todo];
	return masterTodoList;
};

const toggleTodoStatusHelper = (payload, selectedTab) => {
	for (let i = 0; i < masterTodoList.length; i++) {
		if (masterTodoList[i].id === payload.id) {
			masterTodoList[i].isCompleted = !masterTodoList[i].isCompleted;
		}
	}
	if (selectedTab === 0) {
		return masterTodoList;
	} else if (selectedTab === 2) {
		return filterCompletedTasksHelper();
	} else {
		return fitlerPendingTasksHelper();
	}
};

const filterCompletedTasksHelper = () => {
	return masterTodoList.filter(item => {
		return item.isCompleted;
	});
};

const fitlerPendingTasksHelper = () => {
	return masterTodoList.filter(item => {
		return !item.isCompleted;
	});
};

const rootRedcuer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_ADD_FORM:
			return {
				...state,
				addToDoButtonClicked: !state.addToDoButtonClicked,
				totalTasks: masterTodoList.length
			};
		case CHANGE_SELECTED_TAB:
			return {
				...state,
				selectedTab: action.payload,
				totalTasks: masterTodoList.length
			};
		case ADD_TODO:
			return {
				...state,
				addToDoButtonClicked: !state.addToDoButtonClicked,
				todoListItems: [...addToDoItemHelper(action.payload)],
				totalTasks: masterTodoList.length
			};
		case TOGGLE_TODO:
			return {
				...state,
				todoListItems: [
					...toggleTodoStatusHelper(action.payload, state.selectedTab)
				],
				totalTasks: masterTodoList.length
			};
		case FILTER_COMPLETED_TASKS:
			return {
				...state,
				todoListItems: [...filterCompletedTasksHelper()],
				totalTasks: masterTodoList.length
			};
		case FILTER_ALL_TODOS:
			return {
				...state,
				todoListItems: [...masterTodoList],
				totalTasks: masterTodoList.length
			};
		case FILTER_PENDING_TODOS:
			return {
				...state,
				todoListItems: [...fitlerPendingTasksHelper()],
				totalTasks: masterTodoList.length
			};
		default:
			return { ...state, totalTasks: masterTodoList.length };
	}
};

export default rootRedcuer;
