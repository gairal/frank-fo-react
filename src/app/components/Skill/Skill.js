import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import SkillCard from './SkillCard';

export default class Skill extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    skills: [],
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <section>
        <Grid container>
          {this.props.skills.map(category => (
            <Grid
              item
              xs={12}
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
