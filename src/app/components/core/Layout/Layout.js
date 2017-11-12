import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, green, red } from 'material-ui/colors';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import SideNav from '../SideNav';

const drawerWidth = 240;
const styles = theme => ({
  content: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
});

class Layout extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      mobileOpen: false,
      isFetching: false,
    };

    this.palette = {
      palette: {
        // type: 'dark',
        primary: blue, // Purple and green play nicely together.
        secondary: {
          ...green,
          A400: '#00e677',
        },
        error: red,
      },
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(this.palette)}>
        <SideNav
          mobileOpen={this.state.mobileOpen}
          routes={this.props.routes}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <Header
          title={this.state.title}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <main className={this.props.classes.content}>
          <Switch>
            {this.props.routes
              .map(e => <Route path={e.path} component={e.component} key={e.path} />)
              .concat(<Route component={this.props.routes[0].component} key="default" />)
            }
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
