import React from 'react';
// import { IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export const Navigation = () => (
  <div>
    <AppBar
      title="Title"
    />
    <Drawer
      docked={false}
      width={200}
    >
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  </div>
);

export default Navigation;
