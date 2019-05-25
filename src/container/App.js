import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchTaskListBegin, fetchTaskListSuccess, fetchTaskListFailure} from '../actions/actions';
import TaskList from '../components/TaskList';

function fetchTaskList() {
  return dispatch => {
    dispatch(fetchTaskListBegin());
    return fetch('./tasklist.json')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTaskListSuccess(json.taskList));
        return json.taskList;
      })
      .catch(error => dispatch(fetchTaskListFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

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

