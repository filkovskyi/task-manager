import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Index from './Index';
import Edit from './Edit';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Task manager</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <h2>Welcome to React CRUD Tutorial</h2> <br/>
        <Switch>
          <Route exact path='/create' component={ Create }/>
          <Route path='/edit/:id' component={ Edit }/>
          <Route path='/index' component={ Index }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
