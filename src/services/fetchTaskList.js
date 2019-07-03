import { put, takeEvery, call } from 'redux-saga/effects'
import {fetchTaskListBegin, fetchTaskListSuccess, fetchTaskListFailure, fetchTask} from '../actions/actions';

function* watchFethTaskList() {
  yield takeEvery(fetchTask, fetchTaskListAsync);
}

function* fetchTaskListAsync() {
  try {
    yield put(fetchTaskListBegin());
    const data = yield call(() => {
      return fetch('./tasklist.json')
              .then(res => res.json())
      }
    );
    yield put(fetchTaskListSuccess(data));
  } catch (error) {
    yield put(fetchTaskListFailure(error));
  }
}

export default fetchTaskListAsync;