import { delay } from 'redux-saga';
import { 
  takeEvery, race, call, put
} from 'redux-saga/effects';
import { fetchCats, fetchDogs, fetchFishes } from '../../../apis/webapi';
import { Actions, ActionType } from './actions';

function* getAnimals() {
  // 同时执行多个任务
  const [cats, dogs] = yield [
    call(fetchCats),
    call(fetchDogs),
  ];
  yield put(Actions.dataGot(cats, dogs));
}

function* fetchFishesWithTimeout() {
  const { fishes, timeout } = yield race({
    fishes: call(fetchFishes),
    timeout: call(delay, 1000)
  });
  if (fishes) {
    yield put(Actions.fishDataGot(fishes));
  } else {
    yield put(Actions.timeout());
  }
}

export function* watchAnimalDataRequest() {
  yield takeEvery(ActionType.DATA_REQUEST, getAnimals);
  yield takeEvery(ActionType.FISH_DATA_REQUEST, fetchFishesWithTimeout);
}
