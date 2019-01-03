import { combineReducers } from 'redux';
import appState from '../../reducers/appReducer';
import loginState from '../../views/login/container/login-reducer';
import counterState from '../../views/counter/container/counter-reducer';

const reducers = {
  appState,
  loginState,
  counterState,
};

const rootReducer = combineReducers(reducers);

export { reducers, rootReducer };
