import { 
  call, take, put, fork, cancel
} from 'redux-saga/effects';
import { authorize } from '../../../apis/webapi';
import { gotoPage } from '../../../apis/navigation';
import { ActionType } from './actions';

function* login(username, password) {
  try {
    const token = yield call(authorize, username, password);
    yield put({ type: ActionType.LOGIN_SUCCESS, token });
    yield call(gotoPage, '/home');
  } catch (error) {
    yield put({ type: ActionType.LOGIN_ERROR, error });
  }
}

export function* loginFlow() {
  while (true) {
    const { username, password } = yield take(ActionType.LOGIN_REQUEST);
    const task = yield fork(login, username, password);
    const action = yield take([ActionType.LOGOUT, ActionType.LOGIN_ERROR]);
    if (action.type === ActionType.LOGOUT) {
      yield cancel(task);
    }
    yield put({ type: ActionType.CLEAR_TOKEN });
  }
}