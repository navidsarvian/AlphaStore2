import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { Link  } from 'react-router-dom';


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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

            <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="95px" height="95px" class="GGLogo"/>

          <h2 ref={subtitle => this.subtitle = subtitle}>Please Verify Your Age</h2>
          <div className="center">
          <button onClick={this.closeModal} class="ModalButtons">I am 19+</button>
          <Link to="/hi"><button onClick={this.closeModal} class="ModalButtons">I am not 19</button></Link>
            </div>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.querySelector('#root'));




//grey background
// const backdropStyle = {
//     position: 'fixed',
//     top: 50,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundClose: 'rgba(0,0,0,0.3)',
//     padding: 50
// }

// const modalStyle = {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     maxWidth: 500,
//     minHeight: 300,
//     margin: '0 auto',
//     padding: 30,
//     position: "relative"
// };

// const footerStyle = {
//     position: "absolute",
//     bottom: 20
// };

// export default class Modal extends React.Component {
//     onClose = (e) => {
//         this.props.onClose && this.props.onClose(e);
//     }
//     render() {
//         if(!this.props.show){
//             return null;
//         }
//         return(
//             <div className="backdrop" >
//             <div className="modalStyle">
//                 {this.props.children}
              
//               <div className="text-center">
//                 <div className="footerStyle">
//                     <button onClick={(e) => { this.onClose(e)}} className="buttonStyle">
//                         I am 19+
//                         </button>
//                         <button>
//                             I am not 19
//                             </button>

//                     </div>
//                     </div>
//                     </div>
//                     </div>
//         )
//     }
// }

// export class ModalContent extends React.Component {
//     render(){
//         return(
//             <div>
//             <div className="text-center">
            // <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="95px" height="95px" class="GGLogo"/>
//             <h3>Please Verify Your Age</h3>
//             </div>
      
            
//             </div>
//         );
//     }
// }


// Modal.propTypes = {
//     onClose: PropTypes.func.isRequired
// }

