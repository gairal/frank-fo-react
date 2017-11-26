import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import XpCard from '../core/XpCard';

export default class Work extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    works: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <section>
        <Grid container>
          {this.props.works.map(work => (
            <Grid
              item
              xs={12}
              key={work.date_in}
            >
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
