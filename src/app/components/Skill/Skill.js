import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { Grid } from 'material-ui';

class Skill extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    skills: [],
    isFetching: false,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Grid item xs={12}>
        <Grid container>
          {(this.props.isFetching
            ? <CircularProgress />
            : null
          )}
          {this.props.skills.map(skill => (
            <Grid
              item
              xs={3}
              key={skill.id}
            >
              Education
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Skill;
