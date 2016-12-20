import React, { Component } from 'react';
import { render } from 'react-dom';
import { Freebies } from '../../api/freebies/freebies.js';

export default class ViewFreebieModal extends Component {

  constructor(props) {
    super(props);
  }

  getFreebie() {
    return Freebies.findOne( { _id: this.props.freebie })
  }

  render() {
      
    if (this.props.freebie) {
      const freebie = this.getFreebie();

      return (
        <div>
          <h1>Hello, you are viewing a freebie at {freebie.address}</h1>
          <button onClick={this.props.close}>close</button>
        </div>
      )      
    }

    return <div>Loading...</div>;

  }

}