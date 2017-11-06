import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { Grid, Paper, Typography } from 'material-ui';

class Experience extends Component {
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
        <Grid container>
          {(this.props.isFetching
            ? <CircularProgress />
            : null
          )}
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

export default Experience;
