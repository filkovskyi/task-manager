import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Modal, Button} from 'react-bootstrap';
import Task from './Task';
import {MyEnhancedForm} from './TaskForm';

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
            <MyEnhancedForm/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({TaskList}, dispatch));

export default connect(null, mapDispatchToProps)(TaskList)
