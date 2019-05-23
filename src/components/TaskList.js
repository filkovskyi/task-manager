import React, {Component} from 'react';
import Task from './Task';
import taskList from '../taskList';
import _ from 'lodash';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  };

  deleteHandler(id) {
    console.log('deleteHandler new item');
    const tasklist = this.state.taskList.filter(item => item.id !== id);
    console.log(this.state);
    console.log({taskList});

    this.setState({
      tasklist
    })
  };

  editHandler(id) {
    console.log('Please edit', id);
    console.log(_.find(this.state.taskList, {id: id}));
    let editItem = _.find(this.state.taskList, {id: id});
  };

  render() {
    return (
      <div className="task-list">
        <div className="task-list__header row">
          <div className="task-list__header-item col-md-5">Task</div>
          <div className="task-list__header-item col-md-4">To cube</div>
          <div className="task-list__header-item col-md-3">Sort By</div>
        </div>
        {( taskList || []).map(task =>
          <Task key={task.id} task={task} deleteHandler={this.deleteHandler} editHandler={this.editHandler}/>
        )}
      </div>
    );
  }
}

export default TaskList;
