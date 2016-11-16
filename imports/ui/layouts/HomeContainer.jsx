import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

import PrimaryMapContainer from '../components/PrimaryMap.jsx';
import AddFreebieModal from '../components/AddFreebieModal.jsx';

export default class HomeContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        modalIsOpen: false
      }
  }

  openModal() {
      this.setState({modalIsOpen: true});
  }

  closeModal() {
      this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 map-column">
          <PrimaryMapContainer />
        </div>        
        <div className="post-button">
          <button onClick={this.openModal.bind(this)}>Open Me</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal.bind(this)}
                className="add-modal" >

                <AddFreebieModal close={this.closeModal.bind(this)} />

            </Modal>
        </div>
      </div>
      )
  }
}