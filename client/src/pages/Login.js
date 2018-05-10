import React, { Component } from "react";
import { Form, FormGroup, Col } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.props.hideProducts();
  }

  componentDidMount() {
    console.log('this is props inside products');
    console.log(this.props);    
  }

  render (){
    return (
      <div>
        <h1>Log In Page </h1>  
      </div>
    )
  }
}