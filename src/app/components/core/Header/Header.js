import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography type="title" color="inherit">
        Title
      </Typography>
    </Toolbar>
  </AppBar>
);
