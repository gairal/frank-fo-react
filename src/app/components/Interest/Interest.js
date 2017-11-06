import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { Grid } from 'material-ui';

class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    interests: [],
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
          {this.props.interests.map(interest => (
            <Grid
              item
              xs={3}
              key={interest.id}
            >
              Education
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Education;
