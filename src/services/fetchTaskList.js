import {fetchTaskListBegin, fetchTaskListSuccess, fetchTaskListFailure} from '../actions/actions';

const fetchTaskList = () => {
  return dispatch => {
    dispatch(fetchTaskListBegin());
    return fetch('./tasklist.json')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTaskListSuccess(json.taskList));
        return json.taskList;
      })
      .catch(error => dispatch(fetchTaskListFailure(error)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default fetchTaskList;
