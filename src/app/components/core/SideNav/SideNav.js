import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
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
  Divider,
  Typography } from 'material-ui';

const drawerWidth = 240;
const styles = () => ({
  drawerPaper: {
    width: drawerWidth,
  },
});

class SideNav extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    mobileOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
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
            <NavLink to={e.path} key={e.key} onClick={this.props.toggleDrawer} className="nav-link">
              <ListItem button>
                <ListItemIcon>
                  <Icon color="contrast">{e.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={e.key} />
              </ListItem>
            </NavLink>
          ))}
          <Divider />
          <ListItem button>
            <ListItemText primary="version" secondary="4.0.2-react" />
          </ListItem>
        </List>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={this.props.mobileOpen}
            onRequestClose={this.props.toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {this.drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {this.drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(SideNav);
