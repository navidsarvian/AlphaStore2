import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';
import Modal from './components/Modal';

class App extends Component {
  state = {
    show: false
  }
  showModal = () => {
    this.setState({
      ... this.state,
      show: !this.state.show
    });
  }
  render() {
    return (
  <Router>
    <div>
      <Nav1 />
      
      {/* <body onLoad={this.showModal}> */}
      <input type="button" 
      onClick={this.showModal} 
      value="Show Modal" />

      <Modal 
      // onPageLoad={this.showModal}
      onClose={this.showModal}
      show={this.state.show}>
        This message is from Modal!
      </Modal> 
      <Switch>
        {/* <Route exact path="/" component={home} /> */}
        {/* <Route exact path="/modal" component={modal} /> */}
        {/* <Route exact path="/login/:id" component={login} /> */}
        {/* <Route exact path="/shop" component={shop} />* }
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
    );
  }
}
export default App;
