import React, { Component } from 'react';

import NavBar from '../components/NavBar.jsx';
import PrimaryMap from '../components/PrimaryMap.jsx';
import FreebieForm from '../components/FreebieForm.jsx';

// import MapContainer from './MapContainer.jsx';

export default class App extends Component {

  render() {
    return (    
      <div>
      <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <FreebieForm />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
                <PrimaryMap />
            </div>
          </div>
        </div>
      </div>
    );
  }

}