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
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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

  componentDidMount() {
    this.updateTitle(this.props.history.location);
    this.props.history.listen((location) => {
      this.updateTitle(location);
    });
  }

  get routes() {
    const routes = this.props.routes.map(
      e => <Route path={e.path} component={e.component} key={e.path} />);
    routes.push(<Route component={this.props.routes[0].component} key="default" />);

    return routes;
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  updateTitle(location) {
    const title = location.pathname.substr(1);

    this.setState(state => ({
      ...state,
      title,
    }));

    document.title = `frank gairal -- ${title}`;
  }

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
            {this.routes}
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
