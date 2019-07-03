import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import fetchTaskListAsync from './services/fetchTaskList';
import App from './container/App';
import reducer from './reducers/reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, {}, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(fetchTaskListAsync)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
