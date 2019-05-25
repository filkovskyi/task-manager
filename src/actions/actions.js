export const FETCH_TASK_BEGIN   = 'FETCH_TASK_BEGIN';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE';

export const fetchTaskListBegin = () => ({
  type: FETCH_TASK_BEGIN
});

export const fetchTaskListSuccess = taskList => {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: { taskList }
  }
};

export const fetchTaskListFailure = error => ({
  type: FETCH_TASK_FAILURE,
  payload: { error }
});

