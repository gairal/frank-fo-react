import React from 'react';
import ReactDOM from 'react-dom';
import 'es6-promise/auto';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

import '../scss/app.scss';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = createStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer store={store} />,
    MOUNT_NODE,
  );
};

render();
