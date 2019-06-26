import React from 'react';
import { Dropdown } from 'react-bootstrap';
const Task = ({task}) => {
  const {
    id,
    clientName,
    gender,
    clientValue,
    type
  } = task;
  
  return (
    <div className="task row">
      <div className="task-item col-md-4"> {gender === 'male' ? 'Mr':'Mrs '}{clientName} </div>
      <div className="task-item col-md-2"> {clientValue} <sup>3</sup></div>
      <div className="task-item col-md-3"> {type} </div>
      <div className="task-item col-md-3 text-right">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Action
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">EDIT</Dropdown.Item>
            <Dropdown.Item href="#">DELETE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Task;
