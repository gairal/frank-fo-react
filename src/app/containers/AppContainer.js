import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import CoreLayout from '../layouts/CoreLayout';

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, routes } = this.props;
    const routesElements = routes.map(
      e => (<Route path={e.path} component={e.component} key={e.path} />));

    return (
      <Provider store={store}>
        <BrowserRouter>
          {<Route
            path="/"
            component={() => (<CoreLayout routes={routesElements} />)}
          />}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppContainer;
