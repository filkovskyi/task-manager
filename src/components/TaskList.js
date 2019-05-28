import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Modal, Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Formik, Field, Form, Fieldset} from 'formik';
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
  };

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
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
            <Formik
              initialValues={{
                clientName: '',
                value: '',
                type: '',
                gender: ''
              }}
              onSubmit={values => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              render={() => (
              <Form>
                <div className="form-group">
                  <label htmlFor="clientName">User name</label>
                  <Field name="clientName" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="value">Task value</label>
                  <Field name="value" placeholder="Enter task value" />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Task value</label>
                    <select className="form-control" name="type">
                      <option value="cubic job">Cubic job</option>
                      <option value="flat job">Flat job</option>
                    </select>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Task value</label>
                    <select className="form-control" name="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default connect(null, null)(TaskList);

