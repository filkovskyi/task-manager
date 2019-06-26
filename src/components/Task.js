import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {deleteTask} from '../actions/actions';
import {Dropdown} from 'react-bootstrap';

class Task extends Component {
  constructor(props) {
    super(props);

    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
  };

  deleteTaskHandler() {
    console.log(this.props)
    this.props.deleteTask(this.props.task.id)
  }

  render() {
    return (
    <div className="task row">
      <div className="task-item col-md-4"> {this.props.task.gender === 'male' ? 'Mr':'Mrs '}{this.props.task.clientName} </div>
      <div className="task-item col-md-2"> {this.props.task.clientValue} <sup>3</sup></div>
      <div className="task-item col-md-3"> {this.props.task.type} </div>
      <div className="task-item col-md-3 text-right">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Action
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">EDIT</Dropdown.Item>
            <Dropdown.Item href="#" data-id={this.props.task.id} onClick={this.deleteTaskHandler}>DELETE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({deleteTask}, dispatch));

export default connect(null, mapDispatchToProps)(Task);