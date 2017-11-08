import React from 'react';
import { Drawer, List, ListItem, ListItemText, Hidden } from 'material-ui';

export default class SideNav {
  constructor() {
    this.state = {
      mobileOpen: false,
    };

    this.drawer = (
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="version" secondari="4.0.0-react" />
        </ListItem>
      </List>
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
