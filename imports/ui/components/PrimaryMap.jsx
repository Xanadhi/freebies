import React from 'react';
import { render } from 'react-dom';

import { Freebies } from '../../api/freebies/freebies.js';

// Adapted from https://github.com/dburles/meteor-google-maps-react-example/blob/master/googlemaps-react.jsx

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
        zoom: 17
      };
    }
  },
  render() {
    if (this.data.loaded && this.data.mapOptions)
      return <GoogleMap name="freebiesmap" options={this.data.mapOptions} />;

    return <div>Loading map...</div>;
  }
});

GoogleMap = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: document.getElementById('map-container'),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        Freebies.insert( { lat: event.latLng.lat(), lng: event.latLng.lng() });
      })

      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });

      var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(43.6611027, -79.3842948),
        map: map.instance
      })
    });
  },
  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    } 
  },
  render() {
    return <div id="map-container"></div>;
  }
});