import React, { Component } from 'react';

import PrimaryMap from '../components/PrimaryMap.jsx';
import FreebieForm from '../components/FreebieForm.jsx';

export default class MapContainer extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 map-column">
          <PrimaryMap />
        </div>        
        <div className="post-button">
          <FreebieForm />
        </div>
      </div>
      )
  }
}