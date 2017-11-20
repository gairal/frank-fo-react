import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Avatar, Chip, Icon } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Utils from '../../Utils';

export default class Education extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    educations: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <section>
        <Grid container>
          {this.props.educations.map(edu => (
            <Grid
              item
              xs={12}
              key={edu.year_in}
            >
              <Card
                elevation={4}
                style={{ display: 'flex' }}
              >
                <CardMedia
                  image={`/assets/img/${edu.image.name}`}
                  title={edu.name}
                  style={{ height: '120px', width: '120px', flex: 'none' }}
                />
                <CardContent>
                  <Typography type="body1" component="h2">
                    {edu.name} | {edu.short_description}
                  </Typography>
                  <Grid container style={{ textTransform: 'uppercase' }}>
                    <Grid item xs={12} md style={{ flexGrow: 0 }}>
                      <Chip
                        avatar={<Avatar><Icon style={{ fontSize: '19px' }}>date_range</Icon></Avatar>}
                        label={Utils.formatDate(edu.year_in, edu.year_out)}
                      />
                    </Grid>
                    <Grid item xs={12} md>
                      <Chip
                        avatar={<Avatar><Icon style={{ fontSize: '19px' }}>location_city</Icon></Avatar>}
                        label={edu.place}
                      />
                    </Grid>
                  </Grid>
                  <Typography type="caption" component="p">
                    {edu.diploma}
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
