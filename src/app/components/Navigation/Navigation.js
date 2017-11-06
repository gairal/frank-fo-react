import React from 'react';
import { Grid, AppBar, Toolbar, Drawer, List, ListItem, ListItemText, Typography } from 'material-ui';

export const Navigation = () => (
  <Grid item xs={12}>
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
  </Grid>
);

export default Navigation;
