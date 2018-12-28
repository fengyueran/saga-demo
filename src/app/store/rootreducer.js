import { combineReducers } from 'redux';
import appState from '../../reducers/appReducer';
import counterState from '../../reducers/counter-reducer';

const reducers = {
  appState,
  counterState
};

const rootReducer = combineReducers(reducers);

export { reducers, rootReducer };
