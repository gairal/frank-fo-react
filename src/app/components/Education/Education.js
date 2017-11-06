import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { Grid } from 'material-ui';


class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    educations: [],
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
          {this.props.educations.map(edu => (
            <Grid
              item
              xs={3}
              key={edu.id}
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
