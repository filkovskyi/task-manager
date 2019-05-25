import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getTaskList} from '../actions/actions';
import TaskList from '../components/TaskList';

class App extends Component {

  render() {
    console.log(this.props.taskListReducer)
    return (
      <div className="container task-list__wrapper">
        <TaskList taskList={this.props.taskListReducer}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskListReducer: state.taskListReducer
  }
};

const mapDispathToProps = (dispath) => {
  return {
    fetchList: (taskList) => {
      dispath(getTaskList(taskList));
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(App);

