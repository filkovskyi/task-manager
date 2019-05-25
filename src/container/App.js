import React, {Component} from 'react';
import {connect} from 'react-redux'
import TaskList from '../components/TaskList';
import fetchTaskList from '../services/fetchTaskList';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTaskList());
  }

  render() {
    const {error, loading, taskList} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(taskList)
    return (
      <div className="container task-list__wrapper">
        <TaskList taskList={taskList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskList: state.taskList,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, null)(App);

