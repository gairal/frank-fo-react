import React from 'react';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, Typography } from 'material-ui';

export const Navigation = () => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography type="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
    {/* <Drawer
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
    </Drawer> */}
  </div>
);

export default Navigation;
