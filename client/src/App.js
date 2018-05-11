import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';
import Modal, { ModalContent } from './components/Modal';
import Jumbo from "./components/Jumbotron";
import Products from "./components/ProductCards";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Home from "./pages/home";
import Login from "./pages/Login";
import Footer1 from "./components/Footer";
import Register from "./pages/Register";



function MyPage(props) {
  return (
  <div>
    <img src="https://memegenerator.net/img/instances/73077992/no-weed-for-you.jpg" alt="no_weed"/>
  </div>);
}
class App extends Component {

  constructor() {
      super();

      this.state = {
        email: '',
        password: '',
        is_register: false,
        user: {},
        logged_in: false,
        show: true,
        showNav: true,
        showProducts: true
      }
    }

    componentDidMount = () => {

  axios.get('/auth/isauth')
    .then((res) => {
      console.log(res.data);
      this.setState({user: res.data, logged_in: true})
    })
    console.log('this is state');
    console.log(this.state);
}

componentWillReceiveProps(){
  console.log('receiving props in app');
}

componentWillUpdate(){
  console.log('updating props in app');
}

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginOrRegister = (is_register) => {
    let url = is_register ? '/auth/register' : '/auth/login';

    axios.post(url, {email: this.state.email, password: this.state.password})
      .then(res => {
        this.setState({user: res.data, logged_in: true});
      });
  }

  toggleAuth = () => {
    this.setState({
      is_register: !this.state.is_register
    });
  }

  // state = {
  //   show: true,
  //   showNav: true
  // }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  toggleProducts = (bool) => {
    this.setState({
      showProducts: bool
    })
  }

  renderNav = () => {
    // if you don't want nav, ensure this conditional is true
    if ('mycondition' === true) {
      return null;
    }
  }

  handleNav = () => {
    this.setState({
      showNav: false
    });
  }

  render() {
    return (
          <div>
      <Router>
        <div>


          {/* {this.renderNav()} */}

          {!this.state.showNav ? null : <Nav1/>}

          {/* <body onLoad={this.showModal}> */}
          {/* <input type="button"
          onClick={this.showModal}
          value="Show Modal" />
    */}

          <Modal
          onClose={this.showModal}
          show={this.state.show}>
            {/* hansolo={this.handleNav} */}
          {/* > */}

          {/* <ModalContent /> */}
          {/* <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="95px" height="95px" class="GGLogo"/>
            Please Verify Your Age */}
          {/* </ModalContent> */}
          </Modal>
          <Switch>

            {/* <Route exact path="/hi" component={MyPage} /> */}
            <Route exact path="/modal" component={Modal} /> 
            <Route exact path="/" component={Home} />
            <Route exact path ="/login" component={Login} />
            <Route exact path ="/register" component={Register} />

          </Switch>
        </div>
      </Router>


              {/* <Route path="/login" exact render={props => (
                this.state.logged_in ? <Redirect to="/dashboard" /> :
                  <form>
                    <h2>{this.state.is_register ? 'Register' : 'Sign In'}</h2>
                    <input type="text"
                      name="email"
                      value={this.state.email}
                      placeholder="Email"
                      onChange={this.handleChange} />
                    <input type="password"
                      name="password"
                      value={this.state.password}
                      placeholder="Password"
                      onChange={this.handleChange} />
                    <button onClick={(e) => {
                      e.preventDefault();
                      this.loginOrRegister(this.state.is_register);
                    }}>Submit</button>

                    <div className="auth-toggle">
                      <span>Login</span>
                      <div className="toggle-bar" onClick={this.toggleAuth}>
                        <span className={`toggle-switch ${this.state.is_register ? 'toggle' : ''}`}></span>
                      </div>
                      <span>Register</span>
                    </div>
                  </form>
              )} />

              <Route path="/dashboard" render={props => (
                !this.state.logged_in ? <Redirect to="/" /> : <Dashboard user={this.state.user} />
              )} /> */}

              </div>

    );
  };
}

export default App;
