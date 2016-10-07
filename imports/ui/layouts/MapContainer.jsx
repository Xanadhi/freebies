import React, { Component } from 'react';

import PrimaryMap from '../components/PrimaryMap.jsx';
import AddFreebieButton from '../components/AddFreebieButton.jsx';

export default class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 map-column">
          <PrimaryMap />
        </div>        
        <div className="post-button">
          <AddFreebieButton />
        </div>
      </div>
      )
  }
}