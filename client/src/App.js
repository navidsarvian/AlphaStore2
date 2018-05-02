import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';
import Modal, { ModalContent } from './components/Modal';

function MyPage(props) {
  return <div>
    hiiiiiiii
  </div>;
}
class App extends Component {
  state = {
    show: true
  }
  showModal = () => {
    this.setState({
      ... this.state,
      show: !this.state.show
    });
  }
  renderNav() {
    // if you don't want nav, ensure this conditional is true
    if ('mycondition' === true) {   
      return null;
    }

    // else return Nav
    return <Nav1 />;
  }
  
  render() {
    return (
  <Router>
    <div>

      {this.renderNav()}
      
      {/* <body onLoad={this.showModal}> */}
      {/* <input type="button" 
      onClick={this.showModal} 
      value="Show Modal" />
 */}
      <Modal 
      onClose={this.showModal}
      show={this.state.show}>
      {/* <ModalContent /> */}
      {/* <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="95px" height="95px" class="GGLogo"/>
        
      
        Please Verify Your Age */}
      {/* </ModalContent> */}
      </Modal> 
      <Switch>
        <Route exact path="/hi" component={MyPage} />
        {/* <Route exact path="/modal" component={ageModal} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
    );
  }
}
export default App;
