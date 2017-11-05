import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { CircularProgress } from 'material-ui/Progress';

class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    educations: [],
    isFetching: false,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Row>
        {(this.props.isFetching
          ? <CircularProgress />
          : null
        )}
        {this.props.educations.map(edu => (
          <Col
            xs={12}
            key={edu.id}
          >
            Education
          </Col>
        ))}
      </Row>
    );
  }
}

export default Education;
