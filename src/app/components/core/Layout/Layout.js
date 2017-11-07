import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Grid } from 'material-ui';
import { lightBlue, green, red } from 'material-ui/colors';
import Header from '../Header';
// import SideNav from '../SideNav';

export const Layout = ({ routes }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: lightBlue, // Purple and green play nicely together.
      secondary: {
        ...green,
        A400: '#00e677',
      },
      error: red,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <Header />
        {/* <SideNav /> */}
        <Grid item xs={12}>
          <main>
            {routes}
          </main>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
