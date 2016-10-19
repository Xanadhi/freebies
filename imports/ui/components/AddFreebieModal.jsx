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
      name: '',
      desc: '',
      sponsor: '',
      address: ''
    }
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
    Freebies.insert( { name: this.state.name, desc: this.state.desc, sponsor: this.state.sponsor, address: this.state.address });
  }

  render() {
    return (
      <div className="form-group">
      <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name" 
          value={this.state.name}
          className="form-control"
          onChange={this.handleChange.bind(this, 'name')} 
        />
        <label htmlFor="desc">Description</label>
        <input 
          type="text"
          name="desc"
          value={this.state.desc}
          className="form-control" 
          onChange={this.handleChange.bind(this, 'desc')} 
        />
        <label htmlFor="sponsor">Sponsor</label>
        <input 
          type="text"
          name="sponsor"
          value={this.state.sponsor} 
          className="form-control"
          onChange={this.handleChange.bind(this, 'sponsor')} 
        />
        <label htmlFor="address">Address</label>
        <input 
          type="text"
          name="address"
          value={this.state.address}
          className="form-control"
          onChange={this.handleChange.bind(this, 'address')} 
        />        

        <input type="submit" className="btn btn-default" value="Post" />
      </form>

      <button onClick={this.props.close}>close</button>
      </div>


      )
  }

}