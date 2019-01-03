import { combineReducers } from 'redux';
import appState from '../../reducers/appReducer';
import loginState from '../../views/login/container/login-reducer';
import counterState from '../../views/counter/container/counter-reducer';
import animalState from '../../views/animals/container/animals-reducer';

const reducers = {
  appState,
  loginState,
  counterState,
  animalState
};

const rootReducer = combineReducers(reducers);

export { reducers, rootReducer };
