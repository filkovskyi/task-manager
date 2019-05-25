import React, {Component} from 'react';
import Task from './Task';
import _ from 'lodash';

class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     taskList: taskList
  //   };
  //
  //   this.deleteHandler = this.deleteHandler.bind(this);
  //   this.editHandler = this.editHandler.bind(this);
  //   this.addItemHandler = this.addItemHandler.bind(this);
  // };

  // deleteHandler(id) {
  //   console.log(`Item id - ${id} was deleted`);
  //   const filteredList = this.state.taskList.filter(item => item.id !== id);
  //   this.setState({
  //     taskList: filteredList
  //   });
  // };
  //
  // editHandler(id) {
  //   console.log(`Item id - ${id} was changed`);
  //   // harcoded edited values, should be handeled by from
  //   let filteredItem = _.find(this.state.taskList, {id: id});
  //   filteredItem.value = '777';
  //   filteredItem.type = 'Documents';
  //
  //   this.setState({
  //     taskList: [...taskList]
  //   });
  // };
  //
  // addItemHandler() {
  //   function randomInteger(min, max) {
  //     var rand = min - 0.5 + Math.random() * (max - min + 1);
  //     rand = Math.round(rand);
  //     return rand;
  //   }
  //
  //   const newItem = {
  //     id: randomInteger(5, 1000),
  //     clientName: 'New John Doe',
  //     gender: 'male',
  //     value: randomInteger(1, 1000),
  //     type: 'cube job'
  //   };
  //
  //   this.setState({
  //     taskList: [...taskList, Object.assign({}, newItem)]
  //   });
  // }

  render() {
    return (
      <div className="task-list">
        <div className="task-action-wrapper row justify-content-end">
          <div className="task-list__header-item col-md-3 text-right">
            <button className="btn btn-warning">Add New</button>
          </div>
        </div>
        <div className="task-list__header row">
          <div className="task-list__header-item col-md-4"><label className="task-label">Task</label></div>
          <div className="task-list__header-item col-md-2">To cube</div>
          <div className="task-list__header-item col-md-3">Sort By</div>
        </div>
        {( this.props.taskList || []).map(task =>
          <Task key={task.id} task={task}/>
        )}
      </div>
    );
  }
}

export default TaskList;
