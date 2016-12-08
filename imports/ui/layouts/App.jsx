import React, { Component } from 'react';

import NavBar from './NavBar.jsx';
import HomeContainer from './HomeContainer.jsx';

export default class App extends Component {

  render() {
    return (    
      <div>
        <NavBar title="Gratis!" />
        <div className="container-fluid">
        <HomeContainer />
        </div>
      </div>
    );
  }

}