import React, {Component} from 'react';
import TaskList from './TaskList'
class App extends Component {

  render() {
    return (
      <div className="container task-list__wrapper">
        <TaskList/>
      </div>
    );
  }
}

export default App;
