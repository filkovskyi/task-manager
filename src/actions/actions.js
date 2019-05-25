export const GET_TASK_LIST = 'GET_TASK_LIST';

export function getTaskList(taskList) {
  return {
    type: GET_TASK_LIST,
    payload: taskList
  }
}
