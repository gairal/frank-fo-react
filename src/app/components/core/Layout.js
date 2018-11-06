import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from '@/containers/Loader';
import Header from './Header';
import SideNav from './SideNav';

const drawerWidth = 240;
const styles = theme => ({
  content: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
});

export class Layout extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    classes: PropTypes.shape().isRequired,
    store: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    };
    this.theme = createMuiTheme({
      palette: {
        // type: 'dark',
        primary: blue,
        secondary: {
          ...green,
          A400: '#00e677',
        },
        error: red,
      },
    });
  }

  toggleDrawer = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  render() {
    const { store, routes, classes } = this.props;
    const { mobileOpen } = this.state;
    const StoredLLoader = Loader(store);
    // const StoredCLoader = Loader(store, 'circular');
    return (
      <MuiThemeProvider theme={this.theme}>
        <SideNav
          mobileOpen={mobileOpen}
          routes={routes}
          toggleDrawer={this.toggleDrawer}
        />
        <Header toggleDrawer={this.toggleDrawer} />
        <StoredLLoader />
        <main className={classes.content}>
          <Switch>
            {routes
              .map(e => (
                <Route path={e.path} component={e.component} key={e.path} />
              ))
              .concat(<Redirect to={routes[0].path} key="default" />)}
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
