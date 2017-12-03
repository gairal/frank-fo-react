import React from 'react';
import PropTypes from 'prop-types';
import CLoader from './CLoader';
import LLoader from './LLoader';

const Loader = ({ isFetching, type }) => {
  if (!isFetching) return null;
  return type === 'linear' ? <LLoader /> : <CLoader />;
};

Loader.propTypes = {
  isFetching: PropTypes.bool,
  type: PropTypes.string,
};

Loader.defaultProps = {
  isFetching: false,
  type: 'linear',
};

export default Loader;
