import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "@material-ui/core";
import {
	filterAllTodos,
	filterCompletedTasks,
	filterPendingTasks,
	changeSelectedTab
} from "../actions/index";

const mapDispatchToProps = dispatch => {
	return {
		filterAllTodos: () => dispatch(filterAllTodos()),
		filterCompletedTasks: () => dispatch(filterCompletedTasks()),
		filterPendingTasks: () => dispatch(filterPendingTasks()),
		changeSelectedTab: selectedTab => dispatch(changeSelectedTab(selectedTab))
	};
};

const mapStateToProps = state => {
	return {
		selectedTab: state.selectedTab
	};
};

class ConnectedTodoStatusTabs extends React.Component {
	handleChange = (event, value) => {
		console.log(value);
		this.props.changeSelectedTab(value);
		switch (value) {
			case 1:
				this.props.filterPendingTasks();
				break;
			case 2:
				this.props.filterCompletedTasks();
				break;
			default:
				this.props.filterAllTodos();
				break;
		}
	};

	render() {
		return (
			<Tabs
				value={this.props.selectedTab}
				onChange={this.handleChange}
				indicatorColor="primary"
				textColor="primary"
				fullWidth
			>
				<Tab label="All Tasks" />
				<Tab label="Pending Tasks" />
				<Tab label="Completed Tasks" />
			</Tabs>
		);
	}
}

const TodoStatusTabs = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedTodoStatusTabs);

export default TodoStatusTabs;
