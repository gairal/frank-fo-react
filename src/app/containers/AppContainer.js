import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '../components/core/Layout';

export default class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, routes } = this.props;
    const RoutedLayout = withRouter(Layout);

    return (
      <Provider store={store}>
        <BrowserRouter>
          <RoutedLayout routes={routes} />
        </BrowserRouter>
      </Provider>
    );
  }
}
