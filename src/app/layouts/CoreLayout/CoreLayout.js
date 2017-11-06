import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Navigation from '../../components/Navigation';

export const CoreLayout = ({ routes }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

  return (<MuiThemeProvider theme={theme}>
    <Grid container>
      <Navigation />
      {routes}
    </Grid>
  </MuiThemeProvider>);
};

CoreLayout.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CoreLayout;
