import React, {Component} from 'react';
import TaskList from './TaskList'
class App extends Component {

  render() {
    return (
      <div className="container">
        <TaskList/>
      </div>
    );
  }
}

export default App;
