import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm, SubmissionError} from "redux-form";
import { Modal, Button, Form} from 'react-bootstrap';
import Task from './Task';
import _ from 'lodash';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    const form = event.currentTarget;
  }
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


  render() {
    const { validated } = this.state;
    return (
      <div className="task-list">
        <div className="task-action-wrapper row justify-content-end">
          <div className="task-list__header-item col-md-3 text-right">
            <Button variant="warning" onClick={this.handleShow}>Add New</Button>
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="clientName">
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="value">
                <Form.Label>Package Value</Form.Label>
                <Form.Control required type="text" placeholder="Enter package value" />
              </Form.Group>
              <Form.Group controlId="gender">
                <Form.Label>User Gender</Form.Label>
                <Form.Control required as="select">
                  <option>Choose gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="type">
                <Form.Label>Job type</Form.Label>
                <Form.Control required as="select">
                  <option>Choose job type</option>
                  <option>Cube Job</option>
                  <option>Ordinary Job</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onSubmit={this.handleSubmit} onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



export default connect(null, null)(TaskList);

