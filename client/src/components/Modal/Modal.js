import React from 'react';
import './Modal.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.querySelector('#root'));

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });   
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

            <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="95px" height="95px" className="GGLogo" alt=""/>

          <h2 ref={subtitle => this.subtitle = subtitle}>Please Verify Your Age</h2>
          <div className="center">
          <button onClick={this.closeModal} className="ModalButtons">I am 19+</button>

          <button 
            onClick={() => { 
              window.location.href = 'https://memegenerator.net/img/instances/73077992/no-weed-for-you.jpg';
            }} 
            className="ModalButtons">I am not 19</button>
            </div>
        </Modal>
      </div>
    );
  }
}

