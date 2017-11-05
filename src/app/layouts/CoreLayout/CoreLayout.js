import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { Grid } from 'react-flexbox-grid';
import Navigation from '../../components/Navigation';

export const CoreLayout = ({ routes }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

  return (<MuiThemeProvider theme={theme}>
    <div>
      <Navigation />
      <Grid fluid>
        <div>
          {routes}
        </div>
      </Grid>
    </div>
  </MuiThemeProvider>);
};

CoreLayout.propTypes = {
  // routes: PropTypes.element.isRequired,
  routes: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CoreLayout;
