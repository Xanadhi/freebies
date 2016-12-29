import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import NavBar from './NavBar.jsx';
import HomeContainer from './HomeContainer.jsx';

export default class App extends Component {
  componentWillMount() {
    Meteor.subscribe('freebies')
  }

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