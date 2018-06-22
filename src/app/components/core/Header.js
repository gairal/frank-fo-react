import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';

const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    classes: PropTypes.shape().isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      title: '',
    };
  }

  componentDidMount() {
    this.updateTitle(this.props.history.location);
    this.props.history.listen((location) => {
      this.updateTitle(location);
    });
  }

  handleOpenMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  }

  updateTitle(location) {
    const title = location.pathname.substr(1) || 'works';

    this.setState(state => ({
      ...state,
      title,
    }));

    document.title = `frank gairal -- ${title}`;
  }

  render() {
    return (
      <AppBar position="fixed" color="primary" className={this.props.classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.props.toggleDrawer}
            className={this.props.classes.navIconHide}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="display1" component="h1" color="inherit" style={{ flex: 1 }}>
            {this.state.title}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="options"
            onClick={this.handleOpenMenu}
          >
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
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
            <a href="tel:+33695676587" rel="noopener noreferrer" title="+33 6 95 67 65 87">
              <MenuItem onClick={this.handleRequestClose}>
                <ListItemIcon>
                  <Icon>phone</Icon>
                </ListItemIcon>
                <ListItemText inset primary="+33 95 67 65 87" />
              </MenuItem>
            </a>
            <a href="https://linkedin.com/in/gairal" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <MenuItem onClick={this.handleRequestClose}>
                <ListItemIcon>
                  <Icon>link</Icon>
                </ListItemIcon>
                <ListItemText inset primary="LinkedIn" />
              </MenuItem>
            </a>
            <a
              href="/pdf/frank.gairal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="resume"
            >
              <MenuItem onClick={this.handleRequestClose}>
                <ListItemIcon>
                  <Icon>file_download</Icon>
                </ListItemIcon>
                <ListItemText inset primary="resume.pdf" />
              </MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

const headerWithStyle = withStyles(styles, { withTheme: true })(Header);
const header = withRouter(headerWithStyle);

export default header;
// export default withRouter(withStyles(styles, { withTheme: true })(Header));
