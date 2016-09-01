import React, { Component } from 'react';

import NavBar from '../components/NavBar.jsx';
import MapContainer from './MapContainer.jsx';

export default class App extends Component {

  render() {
    return (    
      <div>
      <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <MapContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }

}