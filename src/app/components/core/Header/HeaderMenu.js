import React, { Component } from 'react';
import {
  IconButton,
  Icon,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { anchorEl: null };
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleOpenMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRequestClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-label="options"
          onClick={this.handleOpenMenu}
        >
          <Icon>more_vert</Icon>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleRequestClose}
        >
          <a
            href="mailto:frank@gairal.com"
            rel="noopener noreferrer"
            title="frank@gairal.com"
          >
            <MenuItem onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>email</Icon>
              </ListItemIcon>
              <ListItemText inset primary="frank@gairal.com" />
            </MenuItem>
          </a>
          <a
            href="tel:+33695676587"
            rel="noopener noreferrer"
            title="+33 6 95 67 65 87"
          >
            <MenuItem onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>phone</Icon>
              </ListItemIcon>
              <ListItemText inset primary="+33 95 67 65 87" />
            </MenuItem>
          </a>
          <a
            href="https://linkedin.com/in/gairal"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <MenuItem onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>link</Icon>
              </ListItemIcon>
              <ListItemText inset primary="LinkedIn" />
            </MenuItem>
          </a>
          <a
            href="/pdf/frank.gairal.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            title="CV"
          >
            <MenuItem onClick={this.handleRequestClose}>
              <ListItemIcon>
                <Icon>file_download</Icon>
              </ListItemIcon>
              <ListItemText inset primary="cv.pdf" />
            </MenuItem>
          </a>
        </Menu>
      </React.Fragment>
    );
  }
}
