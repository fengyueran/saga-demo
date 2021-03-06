import { all } from 'redux-saga/effects';
import { loginFlow } from '../../views/login/container/login-sagas';
import { watchIncrementAsync, watchFirstThreeIncrement } from '../../views/counter/container/counter-sagas';
import { watchAnimalDataRequest } from '../../views/animals/container/animals-sagas';

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
      watchAnimalDataRequest()
    ]
  );
}