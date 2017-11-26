import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';

const Loader = ({ isFetching }) => (
  isFetching
    ? <LinearProgress mode="query" />
    : null
);

Loader.propTypes = {
  isFetching: PropTypes.bool,
};

Loader.defaultProps = {
  isFetching: false,
};

export default Loader;
