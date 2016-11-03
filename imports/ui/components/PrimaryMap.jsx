import React from 'react';
import { render } from 'react-dom';

import GoogleMap from './GoogleMap.jsx';
import { Freebies } from '../../api/freebies/freebies.js';

//-- Adapted from https://github.com/dburles/meteor-google-maps-react-example/blob/master/googlemaps-react.jsx

export default React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load({key: 'AIzaSyBkDdFEaWkIkLpfAWCu2oTTqJKiN1llxwE'});
  },
  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },
  _mapOptions() {
    var latLng = Geolocation.latLng();

    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 17,
        streetViewControl: false, // hide the little person
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      };
    }
  },
  render() {
    if (this.data.loaded && this.data.mapOptions)
      return <GoogleMap name="freebiesmap" options={this.data.mapOptions} />;

    return <div>Loading map...</div>;
  }
});

