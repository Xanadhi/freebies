import React from 'react';
import { render } from 'react-dom';

import { Freebies } from '../../api/freebies/freebies.js';

export default class GoogleMap extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: document.getElementById('map-container'),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        // This function should be moved to the FreeForm component and should be an onSubmit event
        // Freebies.insert( { lat: event.latLng.lat(), lng: event.latLng.lng() });
        console.log('boing');
      })

      var freebies = {};

      Freebies.find().observe({
        added: function(document) {
          // create a marker for this document
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.latLng.lat, document.latLng.lng),
            map: map.instance,
            // store document _id on marker in order to update document within the 'dragend' event
            id: document._id
          })
          // update when marker is dragged
          google.maps.event.addListener(marker, 'dragend', function(event) {
            Freebies.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
          });
          // when marker is clicked
          google.maps.event.addListener(marker, 'click', function(event) {
            console.log('click');
          });          
          // store in the Freebies object
          freebies[document._id] = marker;
        },
        changed: function(newDoc, oldDoc) {
          freebies[newDoc._id].setPosition({ lat: newDoc.latLng.lat, lng: newDoc.latLng.lng });
        },
        removed: function(oldDoc) {
          // remove marker from map
          freebies[oldDoc._id].setMap(null);

          // clear event listener
          google.maps.event.clearInstanceListeners(
            freebies[oldDoc._id]
          );

          // remove reference to this marker instance
          delete freebies[oldDoc._id];
        }
      })
    });
  }

  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    } 
  }

  render() {
    return <div id="map-container"></div>;
  }
};

GoogleMap.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired
}