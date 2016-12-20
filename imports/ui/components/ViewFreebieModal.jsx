import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ViewFreebieModal extends Component {

  constructor(props) {
    super(props);
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