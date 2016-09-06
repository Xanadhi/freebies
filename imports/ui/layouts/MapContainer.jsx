import React, { Component } from 'react';

import PrimaryMap from '../components/PrimaryMap.jsx';

export default class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <PrimaryMap />
      </div>
      )
  }
}