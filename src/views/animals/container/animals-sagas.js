import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchCats, fetchDogs } from '../../../apis/webapi';
import { Actions, ActionType } from './actions';

function* getAnimals() {
  // 同时执行多个任务
  const [cats, dogs] = yield [
    call(fetchCats),
    call(fetchDogs),
  ];
  yield put(Actions.dataGetted(cats, dogs));
}

export function* watchAnimalDataRequest() {
  yield takeEvery(ActionType.DATA_REQUEST, getAnimals);
}
