import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

export const Experience = props => (
  <Row>
    {props.experiences.map(exp =>
      <Col
        xs={12}
        key={exp.id}
      >
        Experience
      </Col>,
    )}
  </Row>
);

Experience.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Experience;
