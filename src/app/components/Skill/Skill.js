import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

export const Skill = props => (
  <Row>
    {props.skills.map(skill => (
      <Col
        xs={12}
        key={skill.id}
      >
        Skill
      </Col>
    ))}
  </Row>
);

Skill.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skill;
