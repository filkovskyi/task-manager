import {
  FETCH_TASK_BEGIN,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
} from '../actions/actions';

const initialState = {
  taskList: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.payload.taskList
      };

    case FETCH_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case ADD_TASK:
      console.log(...state)
      return {
        ...state,
        loading: false,
        task: action.payload.task
      };

    default:
      return state;
  }
}
