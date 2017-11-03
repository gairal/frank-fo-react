import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Experience from '../routes/Experience/ExperienceContainer';

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={Experience} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppContainer;
