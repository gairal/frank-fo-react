import React from 'react';
// import { IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

export const Navigation = () => (
  <div>
    <AppBar
      title="Title"
    />
    <Drawer
      docked={false}
      width={200}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item" />
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
      </List>
    </Drawer>
  </div>
);

export default Navigation;
