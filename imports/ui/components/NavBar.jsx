import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <button type="button" className="btn btn-default"><a href="#">Left</a></button>
          <div className="center title"><h1>Freebies</h1></div>
          <button type="button" className="btn btn-default"><a href="#">Right</a></button>
        </div>
      </nav>
    )
  }

};