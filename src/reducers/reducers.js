import {
  FETCH_TASK_BEGIN,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/actions';

const initialState = {
  taskList: [],
  loading: false,
  error: null,
  modalState: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: action.payload.taskList,
      };

    case FETCH_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case SHOW_MODAL:
      return {
        loading: false,
        taskList: [... state.taskList],
        modalState: true
      }  
    
    case HIDE_MODAL:
      return {
        loading: false,
        taskList: [... state.taskList],
        modalState: false
      }  

    case ADD_TASK:
      return {
        loading: false,
        taskList: [... state.taskList, action.payload],
      };    

    case EDIT_TASK:
      return {
        loading: false,
        taskList: [... state.taskList],
        editTaskItem: state.taskList.filter(item => item.id == action.id),
        modalState: true
      };

    case DELETE_TASK:
      return {
        loading: false,
        taskList: [... state.taskList.filter(item => item.id !== action.id)]
      };

    default:
      return state;
  }
}
