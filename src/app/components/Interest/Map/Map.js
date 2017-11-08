import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import { withScriptjs, withGoogleMap } from 'react-google-maps/lib';

const GMap = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
)));

export default class Map extends Component {
  static propTypes = {
    travels: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {

  }

  render() {
    return (
      <GMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyALPF75dwSUZIWeAM-eBvMNA4BN3p-cCj4"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        travels={this.props.travels}
      />
    );
  }
}
