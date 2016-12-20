import React, { Component } from 'react';
import { render } from 'react-dom';
import { Freebies } from '../../api/freebies/freebies.js';

export default class ViewFreebieModal extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getFreebie();
    console.log(this.props.freebie)
  }

  getFreebie() {
    Freebies.find( { _id: this.props.freebie })
  }

  render() {
    
    return (
      <div>
        <h1>Hello.</h1>
        <button onClick={this.props.close}>close</button>
      </div>
    )
  }

}