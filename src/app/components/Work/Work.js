import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from 'material-ui';
import Loader from '../core/Loader';

export default class Work extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    works: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    works: [],
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
          {this.props.works.map(work => (
            <Grid
              item
              xs={12}
              key={work.date_in}
            >
              <Paper elevation={4}>
                <Typography type="headline" component="h5">
                  {work.name} | {work.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
