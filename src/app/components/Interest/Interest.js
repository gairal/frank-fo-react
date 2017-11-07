import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import Loader from '../core/Loader';

export default class Interest extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.object),
    travels: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
  }

  static defaultProps = {
    interests: [],
    travels: [],
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
          {this.props.travels.map(travel => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={travel.place}
            >
            travel
            </Grid>
          ))}
        </Grid>
        <List subheader>
          {this.props.interests.map(category => (
            <div key={category.name}>
              <ListSubheader>{category.name}</ListSubheader>
              {category.interests.map(interest => (
                <ListItem key={interest.name}>
                  <ListItemText primary={interest.name} />
                </ListItem>
              ))}
            </div>
          ))}
        </List>
      </Grid>
    );
  }
}
