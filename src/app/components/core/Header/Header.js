import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';

const Header = ({ title }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography type="title" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
