import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Modal, Button} from 'react-bootstrap';
import Task from './Task';
import MyEnhancedForm from './TaskForm';
import {showModal, hideModal} from '../actions/actions';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.showModalHandler = this.showModalHandler.bind(this);
    this.hideModalHandler = this.hideModalHandler.bind(this);
  };

  showModalHandler() {
    this.props.showModal()
  }

  hideModalHandler() {
    this.props.hideModal()
  }

  render() {
    const {modalState} = this.props;
    
    return (
      <div className="task-list">
        <div className="task-action-wrapper row justify-content-end">
          <div className="task-list__header-item col-md-3 text-right">
            <Button variant="warning" onClick={this.showModalHandler}>Add New</Button>
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
        <Modal show={this.props.modalState} onHide={this.hideModalHandler}>
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

const mapStateToProps = state => {
  return {
    modalState: state.modalState
  }
};

const mapDispatchToProps = dispatch => (bindActionCreators({showModal, hideModal}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
