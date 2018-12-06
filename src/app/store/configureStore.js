import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { storageEnhancer } from '@cc/components-browser';
import { reducers, rootReducer } from './rootreducer';

storageEnhancer.setCustomSerializer(reducers);

export default function configureStore(initialState, history) {
  const middlewares = [thunk, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares), storageEnhancer];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'pruduction'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('./rootreducer', () => {
      const nextReducer = require('./rootreducer'); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }
  global.store = store;
  return store;
}
