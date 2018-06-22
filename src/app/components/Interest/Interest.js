import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Map from './Map';

export default class Interest extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.shape()),
    travels: PropTypes.arrayOf(PropTypes.shape()),
  }

  static defaultProps = {
    interests: [],
    travels: [],
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <section>
        <Map travels={this.props.travels} />
        <List>
          {this.props.interests.map(category => (
            <li key={category.name}>
              <ul>
                <ListSubheader>{category.name}</ListSubheader>
                {category.interests ? category.interests.map(interest => (
                  <ListItem key={interest.name}>
                    <ListItemText primary={interest.name} />
                  </ListItem>
                )) : null}
              </ul>
              <Divider />
            </li>
          ))}
        </List>
      </section>
    );
  }
}
