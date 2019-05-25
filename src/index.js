import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import App from './container/App';
import reducer from './reducers/reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const store = createStore(reducer, {}, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
