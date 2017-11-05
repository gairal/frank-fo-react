import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { CircularProgress } from 'material-ui/Progress';

class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    interests: [],
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
        {this.props.interests.map(interest => (
          <Col
            xs={12}
            key={interest.id}
          >
            Interest
          </Col>
        ))}
      </Row>
    );
  }
}

export default Education;
