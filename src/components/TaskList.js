import React from 'react';
import Task from './Task';

const TaskList = ({taskList}) => {
  return (
    <div className="task-list">
      <div className="task-list__header row">
        <div className="task-list__header-item col-md-6">Task</div>
        <div className="task-list__header-item col-md-3">To cube</div>
        <div className="task-list__header-item col-md-3">Sort By</div>
      </div>
      {( taskList || []).map(task =>
        <Task key={task.id} task={task}/>
      )}
    </div>
  )
};

export default TaskList;
