import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import Routes from './routes';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = createStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  const routes = new Routes(store);

  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE,
  );
};

render();