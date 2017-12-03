import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Avatar, Chip, Icon } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Utils from '../../../Utils';

const XpCard = ({ img, name, title, date_in, date_out, place, subHeadline }) => (
  <Card
    elevation={4}
    style={{ display: 'flex' }}
  >
    <CardMedia
      image={`/assets/img/${img}`}
      title={name}
      style={{ flex: 'none' }}
      className="card-media"
    />
    <CardContent style={{ width: '100%' }}>
      <Typography type="body1" component="h2">
        {name} | {title}
      </Typography>
      <Grid container style={{ textTransform: 'uppercase' }} className="card-chips">
        <Grid item xs={12} md style={{ flexGrow: 0 }}>
          <Chip
            avatar={<Avatar><Icon style={{ fontSize: '19px' }}>date_range</Icon></Avatar>}
            label={Utils.formatDate(date_in, date_out)}
          />
        </Grid>
        <Grid item xs={12} md>
          <Chip
            avatar={<Avatar><Icon style={{ fontSize: '19px' }}>location_city</Icon></Avatar>}
            label={place}
          />
        </Grid>
      </Grid>
      <Typography type="caption" component="p">
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
