import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import { withScriptjs, withGoogleMap } from 'react-google-maps/lib';

const GMap = withScriptjs(
  withGoogleMap(({ children, center, zoom }) => (
    <GoogleMap zoom={zoom} center={center}>
      {children}
    </GoogleMap>
  )),
);

export default class Map extends Component {
  static propTypes = {
    travels: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      center: { lat: 48.856149, lng: 2.3386383 },
      zoom: 8,
    };

    this.isAlive = true;
  }

  componentDidUpdate() {
    const { travels } = this.props;
    const { markers } = this.state;
    if (travels.length && !markers.length) {
      this.travel(0);
    }
  }

  componentWillUnmount() {
    this.isAlive = false;
  }

  travel(index) {
    const { travels } = this.props;
    if (this.isAlive) {
      const currTravel = travels[index];
      if (!currTravel) {
        this.setState(prevState => ({
          ...prevState,
          zoom: 2,
        }));

        return;
      }

      const travel = {
        lat: currTravel.coordinates.Lat,
        lng: currTravel.coordinates.Lng,
      };

      this.setState(prevState => ({
        ...prevState,
        markers: prevState.markers.concat(travel),
        center: travel,
      }));

      setTimeout(() => this.travel(index + 1), 2000);
    }
  }

  render() {
    const { markers, center, zoom } = this.state;
    return (
      <GMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyALPF75dwSUZIWeAM-eBvMNA4BN3p-cCj4"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        center={center}
        zoom={zoom}
      >
        {markers.map(e => (
          <Marker key={e.lat} position={e} />
        ))}
      </GMap>
    );
  }
}
