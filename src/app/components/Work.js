import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import XpCard from './core/XpCard';

export default class Work extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    works: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { works } = this.props;
    return (
      <section>
        <Grid container>
          {works.map(work => (
            <Grid item xs={12} key={work.date_in}>
              <XpCard
                img={work.image.name}
                name={work.name}
                title={work.title}
                date_in={work.date_in}
                date_out={work.date_out}
                place={work.place}
                subHeadline={work.description}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}
