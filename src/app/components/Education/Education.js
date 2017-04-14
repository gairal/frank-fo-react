import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

export const Education = props => (
  <Row>
    {props.educations.map(edu =>
      <Col
        xs={12}
        key={edu.id}
      >
        Education
      </Col>,
    )}
  </Row>
);

Education.propTypes = {
  educations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Education;
