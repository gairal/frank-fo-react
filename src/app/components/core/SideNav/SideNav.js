import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Hidden,
  Typography } from 'material-ui';

export default class SideNav extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };

    this.drawer = (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="headline" component="h1" color="inherit">
              frank g.
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {this.props.routes.map(e => (
            <ListItem button key={e.path}>
              <ListItemIcon>
                <Icon color="contrast">{e.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={e.path} />
            </ListItem>
          ))}
          <ListItem button>
            <ListItemText primary="version" secondary="4.0.0-react" />
          </ListItem>
        </List>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={this.state.mobileOpen}
            onRequestClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {this.drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
          >
            {this.drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
