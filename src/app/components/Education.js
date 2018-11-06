import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import XpCard from './core/XpCard';

export default class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { educations } = this.props;
    return (
      <section>
        <Grid container>
          {educations.map(edu => (
            <Grid item xs={12} key={edu.year_in}>
              <XpCard
                img={edu.image.name}
                name={edu.name}
                title={edu.short_description}
                date_in={edu.year_in}
                date_out={edu.year_out}
                place={edu.place}
                subHeadline={edu.diploma}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}
