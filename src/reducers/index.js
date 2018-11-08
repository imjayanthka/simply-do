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
	selectedTab: 0
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
	if (selectedTab === 0) return masterTodoList;
	else if (selectedTab === 1) return filterCompletedTasksHelper();
	else return fitlerPendingTasksHelper();
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
			return { ...state, addToDoButtonClicked: !state.addToDoButtonClicked };
		case CHANGE_SELECTED_TAB:
			return { ...state, selectedTab: action.payload };
		case ADD_TODO:
			return {
				...state,
				addToDoButtonClicked: !state.addToDoButtonClicked,
				todoListItems: [...addToDoItemHelper(action.payload)]
			};
		case TOGGLE_TODO:
			return {
				...state,
				todoListItems: [...toggleTodoStatusHelper(action.payload)]
			};
		case FILTER_COMPLETED_TASKS:
			return {
				...state,
				todoListItems: [...filterCompletedTasksHelper()]
			};
		case FILTER_ALL_TODOS:
			return {
				...state,
				todoListItems: [...masterTodoList]
			};
		case FILTER_PENDING_TODOS:
			return {
				...state,
				todoListItems: [...fitlerPendingTasksHelper()]
			};
		default:
			return state;
	}
};

export default rootRedcuer;
