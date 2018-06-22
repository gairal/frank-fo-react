import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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
  Typography,
} from '@material-ui/core';

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
            <Typography variant="title" component="h1" color="inherit">
              frank g.
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {this.props.routes.map(e => (
            <NavLink to={e.path} key={e.key} onClick={this.props.toggleDrawer} className="nav-link">
              <ListItem button>
                <ListItemIcon>
                  <Icon color="error">{e.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={e.key} />
              </ListItem>
            </NavLink>
          ))}
          <Divider />
          <ListItem button>
            <ListItemText primary="version" secondary="4.1.0-react" />
          </ListItem>
        </List>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={this.props.mobileOpen}
            onClose={this.props.toggleDrawer}
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
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {this.drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SideNav);
