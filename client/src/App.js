import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav1 from "./components/Nav";
import './App.css';
import './index.css';
import Modal from './components/Modal';
import axios from "axios";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";

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



          {!this.state.showNav ? null : <Nav1/>}


          <Modal
          onClose={this.showModal}
          show={this.state.show}>

          </Modal>
          <Switch>

            <Route exact path="/modal" component={Modal} /> 
            <Route exact path="/" component={Home} />
            <Route exact path ="/login" component={Login} />
            <Route exact path ="/register" component={Register} />

          </Switch>
        </div>
      </Router>



              </div>

    );
  };
}

export default App;
