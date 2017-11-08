import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton, Icon } from 'material-ui';

const Header = ({ title }) => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Typography type="headline" component="h1" color="inherit" style={{ flex: 1 }}>
        {title}
      </Typography>
      <IconButton color="contrast" aria-label="options">
        <Icon color="contrast">more_vert</Icon>
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
