import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {fetchTask} from '../actions/actions';
import TaskList from '../components/TaskList';
class App extends Component {
  componentDidMount() {
    this.props.fetchTask();
  }

  render() {
    const {error, loading, taskList} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    
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

const mapDispatchToProps = dispatch => (bindActionCreators({fetchTask}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);

