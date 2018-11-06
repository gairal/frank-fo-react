import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '../routes';
import LayoutWith from '../components/core/Layout';

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store } = this.props;
    const routes = new Routes(store);

    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <LayoutWith routes={routes} store={store} />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}
