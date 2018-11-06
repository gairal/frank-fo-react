import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export default class SkillLevel extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.animateLevel();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateLevel(resolve) {
    const { level } = this.props;
    const { progress } = this.state;
    if (progress >= level) {
      clearInterval(this.interval);
      resolve(progress);
    } else {
      this.setState(prevState => ({
        progress: prevState.progress + 5,
      }));
    }
  }

  animateLevel() {
    return new Promise(resolve => {
      this.interval = setInterval(() => this.updateLevel(resolve), 5);
    });
  }

  render() {
    const { progress } = this.state;
    return <CircularProgress variant="static" value={progress} thickness={5} />;
  }
}
