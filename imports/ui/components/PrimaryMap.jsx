import React from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import GoogleMap from './GoogleMap.jsx';
import { Freebies } from '../../api/freebies/freebies.js';

//-- Adapted from https://github.com/dburles/meteor-google-maps-react-example/blob/master/googlemaps-react.jsx

class PrimaryMap extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    GoogleMaps.load({key: 'AIzaSyBkDdFEaWkIkLpfAWCu2oTTqJKiN1llxwE'});
  }

  render() {
    if (this.props.loaded && this.props.mapOptions)
      return <GoogleMap name="freebiesmap" options={this.props.mapOptions} />;

    return <div>Loading map...</div>;
  }
};

PrimaryMap.propTypes = {
  loaded: React.PropTypes.bool,
  mapOptions: React.PropTypes.object
}

export default PrimaryMapContainer = createContainer (() => {
  const loaded = GoogleMaps.loaded();
  const latLng = Geolocation.latLng();
  const _mapOptions = function() {
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 17,
        streetViewControl: false, // hide the little person
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      }
    }
  }
  const mapOptions = _mapOptions();

  return {
    loaded,
    mapOptions
  }
}, PrimaryMap)