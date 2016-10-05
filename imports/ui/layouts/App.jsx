import React, { Component } from 'react';

import NavBar from '../components/NavBar.jsx';
import MapContainer from './MapContainer.jsx';

export default class App extends Component {

  render() {
    return (    
      <div>
      <NavBar title="Freebies" />
        <div className="container-fluid">
            <MapContainer />
        </div>
      </div>
    );
  }

}