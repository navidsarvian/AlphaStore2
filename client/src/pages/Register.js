import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Regiter extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.props.hideProducts();
  // }

  componentDidMount() {
    console.log('this is props inside products');
    console.log(this.props);

  }

  render (){
    return (
      <div className="logincontainer">
        <Form>
        <FormGroup row>
         <Label for="exampleUsername" sm={3}>Username</Label>
         <Col sm={8}>
           <Input type="username" name="username" id="exampleUsername" placeholder="maryjane" />
         </Col>
       </FormGroup>
       <FormGroup row>
         <Label for="exampleEmail" sm={3}>Email</Label>
         <Col sm={8}>
           <Input type="email" name="email" id="exampleEmail" placeholder="mary@jane.com" />
         </Col>
       </FormGroup>
       <FormGroup row>
         <Label for="examplePassword" sm={3}>Password</Label>
         <Col sm={8}>
           <Input type="password" name="password" id="examplePassword" placeholder="enter password here" />
         </Col>
       </FormGroup>

       <FormGroup check row>
         <Col sm={{ size: 10 }}>
         <Link to="/login">
           <Button color="success">Submit</Button>
           </Link>
         </Col>
       </FormGroup>
     </Form>
      </div>
    )
  }
}
