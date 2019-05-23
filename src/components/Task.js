import React from 'react';

const Task = ({task}) => {
  const {
    clientName,
    gender,
    value,
    type
  } = task;

  return (
    <div className="task row">
      <div className="task-item col-md-5"> {gender === 'male' ? 'Mr':'Mrs '}{clientName} </div>
      <div className="task-item col-md-1"> {value} </div>
      <div className="task-item col-md-3"> {type} </div>
      <div className="task-item col-md-3"> Action </div>
    </div>
  );
};

export default Task;
