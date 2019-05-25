import { combineReducers } from 'redux'
import { GET_TASK_LIST } from '../actions/actions'

const taskList = [
  {
    id: 1,
    clientName: 'John Doe',
    gender: 'male',
    value: 50,
    type: 'cube job'
  },
  {
    id: 2,
    clientName: 'Jade Smith',
    gender: 'female',
    value: 250,
    type: 'cube job'
  },
  {
    id: 3,
    clientName: 'Garry Woo',
    gender: 'male',
    value: 510,
    type: 'cube job'
  },
  {
    id: 4,
    clientName: 'Liza Folson',
    gender: 'female',
    value: 20,
    type: 'cube job'
  }
];

const initialUserState = {
  taskList: taskList
};

const taskListReducer = function(state = initialUserState, action) {
  switch(action.type) {
    case 'GET_TASK_LIST':
      return Object.assign({}, state, {
        taskList: action.taskList
      });
  }
  return state;
};



const rootReducer = combineReducers({taskListReducer});

export default rootReducer;
