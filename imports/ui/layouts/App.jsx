import React, { Component } from 'react';

import NavBar from './NavBar.jsx';
import MapContainer from './MapContainer.jsx';

export default class App extends Component {

  render() {
    return (    
      <div>
        <NavBar title="Gratis!" />
        <div className="container-fluid">
        <MapContainer />
        </div>
      </div>
    );
  }

}