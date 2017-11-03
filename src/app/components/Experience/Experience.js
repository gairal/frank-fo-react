import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

class Experience extends Component {
  static propTypes = {
    init: PropTypes.func.isRequired,
    experiences: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    experiences: [],
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Row>
        {this.props.experiences.map(exp => (
          <Col
            xs={12}
            key={exp.id}
          >
            Experience
          </Col>
        ))}
      </Row>
    );
  }
}

export default Experience;
