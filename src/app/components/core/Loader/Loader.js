import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import { Grid } from 'material-ui';

export const Loader = props => (
  props.isFetching
    ? (
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
        style={{ width: '100%', display: 'block' }}
      >
        <LinearProgress mode="query" />
      </Grid>
    )
    : null
);

Loader.propTypes = {
  isFetching: PropTypes.bool,
};

Loader.defaultProps = {
  isFetching: false,
};

export default Loader;
