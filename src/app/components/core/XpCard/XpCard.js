import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Avatar, Chip, Icon, Card, CardContent, CardMedia } from '@material-ui/core';
import Utils from '../../../Utils';

const XpCard = ({
  img, name, title, date_in, date_out, place, subHeadline, // eslint-disable-line camelcase
}) => (
  <Card
    elevation={4}
    style={{ display: 'flex', marginBottom: '1rem', padding: '1rem' }}
  >
    <CardMedia
      image={`/img/${img}`}
      title={name}
      style={{ flex: 'none' }}
      className="card-media"
    />
    <CardContent style={{ width: '100%' }}>
      <Typography variant="title" component="h2">
        {name} | {title}
      </Typography>
      <Grid container style={{ textTransform: 'uppercase' }} className="card-chips">
        <Grid item xs={12} md style={{ flexGrow: 0, marginRight: '0.2rem', marginBottom: '.5rem' }}>
          <Chip
            avatar={<Avatar><Icon style={{ fontSize: '19px', color: '#fff' }}>date_range</Icon></Avatar>}
            label={Utils.formatDate(date_in, date_out)}
          />
        </Grid>
        <Grid item xs={12} md>
          <Chip
            avatar={<Avatar><Icon style={{ fontSize: '19px', color: '#fff' }}>location_city</Icon></Avatar>}
            label={place}
          />
        </Grid>
      </Grid>
      <Typography variant="caption" component="p" style={{ marginTop: '0.5rem' }}>
        {subHeadline}
      </Typography>
    </CardContent>
  </Card>
);

XpCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date_in: PropTypes.string.isRequired,
  date_out: PropTypes.string,
  place: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
};

XpCard.defaultProps = {
  date_out: null,
};

export default XpCard;
