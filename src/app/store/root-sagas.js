import { all } from 'redux-saga/effects';
import { loginFlow } from '../../sagas/login-sagas';
import { watchIncrementAsync, watchFirstThreeIncrement } from '../../sagas/counter-sagas';

function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all(
    [
      helloSaga(),
      watchIncrementAsync(),
      watchFirstThreeIncrement(),
      loginFlow(),
    ]
  );
}