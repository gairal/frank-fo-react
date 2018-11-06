import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import Map from './Map';

export default class Interest extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.shape()),
    travels: PropTypes.arrayOf(PropTypes.shape()),
  };

  static defaultProps = {
    interests: [],
    travels: [],
  };

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { travels, interests } = this.props;

    const listItem = interest => (
      <ListItem key={interest.name}>
        <ListItemText primary={interest.name} />
      </ListItem>
    );

    return (
      <section>
        <Map travels={travels} />
        <List>
          {interests.map(category => (
            <li key={category.name}>
              <ul>
                <ListSubheader>{category.name}</ListSubheader>
                {category.interests ? category.interests.map(listItem) : null}
              </ul>
              <Divider />
            </li>
          ))}
        </List>
      </section>
    );
  }
}
