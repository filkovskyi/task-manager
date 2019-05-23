import React from 'react';

const Task = ({task, editHandler, deleteHandler}) => {
  const {
    id,
    clientName,
    gender,
    value,
    type
  } = task;

  return (
    <div className="task row">
      <div className="task-item col-md-4"> {gender === 'male' ? 'Mr':'Mrs '}{clientName} </div>
      <div className="task-item col-md-2"> {value} <sup>3</sup></div>
      <div className="task-item col-md-2"> {type} </div>
      <div className="task-item col-md-2" onClick={() => editHandler(id)}> EDIT </div>
      <div className="task-item col-md-2" onClick={() => deleteHandler(id)}> DELETE </div>
    </div>
  );
};

export default Task;
