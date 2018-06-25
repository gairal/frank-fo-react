import React from 'react';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

import '../scss/app.scss';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = createStore(initialState);

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <AppContainer store={store} />
  </React.Fragment>
);

export default hot(module)(App);
