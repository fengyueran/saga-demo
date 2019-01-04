import { delay } from 'redux-saga';
import { 
  takeEvery, race, call, put, take, cancelled
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

function* backgroundTask() {
  try {
    while (true) {
      yield call(delay, 2000);
      console.log('bg task');
    }
  } finally {
    if (yield cancelled()) {
      alert('canceled');
    }
  }
}

function* watchStartBackgroundTask() {
  yield race({
    task: call(backgroundTask),
    cancel: take(ActionType.CANCEL_BG_TASK)
  });
}

export function* watchAnimalDataRequest() {
  yield takeEvery(ActionType.DATA_REQUEST, getAnimals);
  yield takeEvery(ActionType.FISH_DATA_REQUEST, fetchFishesWithTimeout);
  yield takeEvery(ActionType.START_BG_TASK, watchStartBackgroundTask);
}
