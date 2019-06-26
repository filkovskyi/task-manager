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
      return {
        loading: false,
        taskList: [... state.taskList, action.payload]
      };

    default:
      return state;
  }
}


// deleteHandler(id) {
  //   console.log(`Item id - ${id} was deleted`);
  //   const filteredList = this.state.taskList.filter(item => item.id !== id);
  //   this.setState({
  //     taskList: filteredList
  //   });
  // };
  //
  // editHandler(id) {
  //   console.log(`Item id - ${id} was changed`);
  //   // harcoded edited values, should be handeled by from
  //   let filteredItem = _.find(this.state.taskList, {id: id});
  //   filteredItem.value = '777';
  //   filteredItem.type = 'Documents';
  //
  //   this.setState({
  //     taskList: [...taskList]
  //   });
  // };
