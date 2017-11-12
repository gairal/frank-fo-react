import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../routes';
import Layout from '../components/core/Layout';

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store } = this.props;
    const routes = new Routes(store);

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout routes={routes} />
        </BrowserRouter>
      </Provider>
    );
  }
}
