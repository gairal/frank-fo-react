import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from 'material-ui';
import Loader from '../core/Loader';

export default class Education extends Component {
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
        <Loader isFetching={this.props.isFetching} />
        <Grid container>
          {this.props.educations.map(edu => (
            <Grid
              item
              xs={12}
              key={edu.name}
            >
              <Paper elevation={4}>
                <Typography type="headline" component="h5">
                  {edu.name} | {edu.short_description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
