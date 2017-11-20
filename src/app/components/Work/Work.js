import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Avatar, Chip, Icon } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Utils from '../../Utils';

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
              <Card
                elevation={4}
                style={{ display: 'flex' }}
              >
                <CardMedia
                  image={`/assets/img/${work.image.name}`}
                  title={work.name}
                  style={{ height: '120px', width: '120px', flex: 'none' }}
                />
                <CardContent style={{ width: '100%' }}>
                  <Typography type="body1" component="h2">
                    {work.name} | {work.title}
                  </Typography>
                  <Grid container style={{ textTransform: 'uppercase' }}>
                    <Grid item xs={12} md style={{ flexGrow: 0 }}>
                      <Chip
                        avatar={<Avatar><Icon style={{ fontSize: '19px' }}>date_range</Icon></Avatar>}
                        label={Utils.formatDate(work.date_in, work.date_out)}
                      />
                    </Grid>
                    <Grid item xs={12} md>
                      <Chip
                        avatar={<Avatar><Icon style={{ fontSize: '19px' }}>location_city</Icon></Avatar>}
                        label={work.place}
                      />
                    </Grid>
                  </Grid>
                  <Typography type="caption" component="p">
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}
