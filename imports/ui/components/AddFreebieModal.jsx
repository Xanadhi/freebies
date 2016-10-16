import React, { Component } from 'react';
import { render } from 'react-dom';

import { Freebies } from '../../api/freebies/freebies.js';

export default class AddFreebieModal extends Component {

// ask user if they want to add current location as a Freeie
  //* if their current location is correct, allow them to enter the right address/click on the map

// asks for some basic information:
  // sponsor
  // type of freebie
  // extra desc?

// inserts Freebie into the collection

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
  }

  handleAddressChange(e) {
    this.setState({address: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.address);
  }

  render() {
    return (
      <div>
      <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          value={this.state.address} 
          onChange={this.handleAddressChange.bind(this)} 
        />
        <input type="submit" value="Post" />
      </form>

      <button onClick={this.props.close}>close</button>
      </div>


      )
  }

}