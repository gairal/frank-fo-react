import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Avatar, Chip, Icon } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Loader from '../core/Loader';

export default class Work extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    works: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    isFetching: false,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Grid item xs={12}>
        <Loader isFetching={this.props.isFetching} />
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
                <CardContent>
                  <Typography type="body1" component="h2">
                    {work.name} | {work.title}
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    <Chip
                      avatar={<Avatar><Icon style={{ fontSize: '19px' }}>date_range</Icon></Avatar>}
                      label={work.date_in}
                    />
                    <Chip
                      avatar={<Avatar><Icon style={{ fontSize: '19px' }}>location_city</Icon></Avatar>}
                      label={work.place}
                    />
                  </div>
                  <Typography type="caption" component="p">
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
