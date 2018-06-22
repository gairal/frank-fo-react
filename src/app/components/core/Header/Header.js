import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton, Icon } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';

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
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    toggleDrawer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
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
    this.setState({ open: true, anchorEl: event.currentTarget });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
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
            color="contrast"
            aria-label="open drawer"
            onClick={this.props.toggleDrawer}
            className={this.props.classes.navIconHide}
          >
            <Icon color="contrast">menu</Icon>
          </IconButton>
          <Typography type="headline" component="h1" color="inherit" style={{ flex: 1 }}>
            {this.state.title}
          </Typography>
          <IconButton
            color="contrast"
            aria-label="options"
            onClick={this.handleOpenMenu}
          >
            <Icon color="contrast">more_vert</Icon>
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <a href="mailto:frank@gairal.com" rel="noopener noreferrer" title="frank@gairal.com">
              <MenuItem onClick={this.handleRequestClose}>
                <Icon>email</Icon> frank@gairal.com
              </MenuItem>
            </a>
            <a href="tel:+33695676587" rel="noopener noreferrer" title="+33 6 95 67 65 87">
              <MenuItem onClick={this.handleRequestClose}>
                <Icon>phone</Icon> +33 95 67 65 87
              </MenuItem>
            </a>
            <a href="https://linkedin.com/in/gairal" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <MenuItem onClick={this.handleRequestClose}>
                <Icon>link</Icon> LinkedIn
              </MenuItem>
            </a>
            <a href="/pdf/frank.gairal.pdf" target="_blank" rel="noopener noreferrer" title="resume">
              <MenuItem onClick={this.handleRequestClose}>
                <Icon>file_download</Icon> RESUME.PDF
              </MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Header));
