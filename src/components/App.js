import React, {Component} from 'react';
import taskList from '../taskList';
import TaskList from './TaskList'
class App extends Component {

  render() {
    return (
      <div className="container">
        <TaskList taskList={taskList}/>
      </div>
    );
  }
}

export default App;
