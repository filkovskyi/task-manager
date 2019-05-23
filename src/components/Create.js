import React, {Component} from 'react';

class Create extends Component {
  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Task</h3>
        <form>
          <div className="form-group">
            <label>Add Person Name:  </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Add volume(ft): </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Add badge: </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Task" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
