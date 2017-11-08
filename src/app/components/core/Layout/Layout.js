import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Grid } from 'material-ui';
import { blue, green, red } from 'material-ui/colors';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import SideNav from '../SideNav';

export default class Layout extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props);

    this.state = {
      title: '',
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

  get theme() {
    return createMuiTheme(this.palette);
  }

  updateTitle(location) {
    const title = location.pathname.substr(1);

    this.setState(() => ({
      title,
    }));

    document.title = `frank gairal -- ${title}`;
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <Grid container>
          <Header title={this.state.title} />
          <SideNav routes={this.props.routes} />
          <Grid item xs={12}>
            <main>
              <Switch>
                {this.routes}
              </Switch>
            </main>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
