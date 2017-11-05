import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { CircularProgress } from 'material-ui/Progress';

class Experience extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    works: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    works: [],
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
        {this.props.works.map(work => (
          <Col
            xs={12}
            key={work.id}
          >
            Experience
          </Col>
        ))}
      </Row>
    );
  }
}

export default Experience;
