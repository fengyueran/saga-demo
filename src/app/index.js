import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from "react-router-dom";
import configureStore from './store/configureStore';
import { setHistory } from '../apis/navigation';
import App from './app';

const initialState = {};
const history = createHistory();
setHistory(history);
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

export default render;
