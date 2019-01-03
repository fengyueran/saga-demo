import { delay } from 'redux-saga';
import { 
  call, take, put, takeEvery
} from 'redux-saga/effects';
import { ActionType } from './actions';

export function* incrementAsync() {
  // yield delay(1000);
  yield call(delay, 1000);
  yield put({ type: ActionType.INCREMENT });
}

export function* watchIncrementAsync() {
  yield takeEvery(ActionType.INCREMENT_ASYNC, incrementAsync);
}

export function* watchFirstThreeIncrement() {
  for (let i = 0; i < 3; i++) {
    yield take(ActionType.INCREMENT);
  }
  yield put({ type: 'SHOW_CONGRATULATION' });
}