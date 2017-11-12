import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'material-ui';
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List';
import Loader from '../core/Loader';
import Map from './Map';

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
      <section>
        <Loader isFetching={this.props.isFetching} />
        <Map travels={this.props.travels} />
        <List subheader>
          {this.props.interests.map(category => (
            <div key={category.name}>
              <ListSubheader>{category.name}</ListSubheader>
              {category.interests ? category.interests.map(interest => (
                <ListItem key={interest.name}>
                  <ListItemText primary={interest.name} />
                </ListItem>
              )) : null}
              <Divider />
            </div>
          ))}
        </List>
      </section>
    );
  }
}
