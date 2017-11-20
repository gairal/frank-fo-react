import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';

export default class SkillLevel extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.progress >= this.props.level) {
        clearInterval(this.interval);
      } else {
        this.setState(prevState => ({
          progress: prevState.progress + 5,
        }));
      }
    }, 5);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <CircularProgress mode="determinate" value={this.state.progress} thickness={5} />
    );
  }
}
