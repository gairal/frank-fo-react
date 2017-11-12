import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import Loader from '../core/Loader';
import SkillCard from './SkillCard';

export default class Skill extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    skills: [],
    isFetching: false,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <section>
        <Loader isFetching={this.props.isFetching} />
        <Grid container>
          {this.props.skills.map(category => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={category.name}
            >
              <SkillCard category={category} />
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}
