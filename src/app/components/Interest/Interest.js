import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

export const Interest = props => (
  <Row>
    {props.interests.map(int =>
      <Col
        xs={12}
        key={int.id}
      >
        Interest
      </Col>,
    )}
  </Row>
);

Interest.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Interest;
