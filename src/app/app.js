import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

import '../scss/app.scss';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = createStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <AppContainer store={store} />
    </React.Fragment>,
    MOUNT_NODE,
  );
};

render();
export default hot(module)(render);
