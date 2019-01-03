import { combineReducers } from 'redux';
import appState from '../../reducers/appReducer';
import loginState from '../../reducers/login-reducer';
import counterState from '../../reducers/counter-reducer';

const reducers = {
  appState,
  loginState,
  counterState,
};

const rootReducer = combineReducers(reducers);

export { reducers, rootReducer };
