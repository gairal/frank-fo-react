import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-flexbox-grid';
import Navigation from '../../components/Navigation';

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <Navigation />
      <Grid fluid>
        {children}
      </Grid>
    </div>
  </MuiThemeProvider>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;
