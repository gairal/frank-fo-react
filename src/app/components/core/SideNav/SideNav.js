import React from 'react';
import { Drawer, List, ListItem, ListItemText } from 'material-ui';

export default () => (
  <Drawer
    type="permanent"
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
);
