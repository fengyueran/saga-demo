import { 
  call, take, put, fork, cancel
} from 'redux-saga/effects';
import { authorize } from '../apis/webapi';
import { gotoPage } from '../apis/navigation';

function* login(username, password) {
  try {
    const token = yield call(authorize, username, password);
    yield put({ type: 'LOGIN_SUCCESS', token });
    yield call(gotoPage, '/home');
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  }
}

export function* loginFlow() {
  while (true) {
    const { username, password } = yield take('LOGIN_REQUEST');
    const task = yield fork(login, username, password);
    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
    if (action.type === 'LOGOUT') {
      yield cancel(task);
    }
    yield put({ type: 'CLEAR_TOKEN' });
  }
}