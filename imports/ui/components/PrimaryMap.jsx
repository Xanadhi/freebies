import React from 'react';
import { render } from 'react-dom';

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
    return {
      center: new google.maps.LatLng(43.6611066, -79.3842948),
      zoom: 14
    };
  },
  render() {
    if (this.data.loaded)
      return <GoogleMap name="mymap" options={this.data.mapOptions} />;

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
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
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