import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';
import Modal, { ModalContent } from './components/Modal';
import Jumbo from "./components/Jumbotron";
import Products from "./components/ProductCards";


function MyPage(props) {
  return (
  <div>
    <img src="https://memegenerator.net/img/instances/73077992/no-weed-for-you.jpg" alt="no_weed"/>
  </div>);
}
class App extends Component {

  state = {
    show: true,
    showNav: true
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  renderNav() {
    // if you don't want nav, ensure this conditional is true
    if ('mycondition' === true) {
      return null;
    }

  handleNav = () => {
    this.setState({
      showNav: false
    });
  }

  render() {
    return (
  <Router>
    <div>


      {this.renderNav()}

      {!this.state.showNav ? null : <Nav1/>}
      
      {/* <body onLoad={this.showModal}> */}
      {/* <input type="button"
      onClick={this.showModal}
      value="Show Modal" />
 */}

 <Jumbo />
 <Products />
      <Modal
      onClose={this.showModal}
      show={this.state.show}>
        hansolo={this.handleNav}
      >

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
