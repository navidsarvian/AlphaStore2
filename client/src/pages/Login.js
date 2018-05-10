import React, { Component } from "react";
// import { Form, FormGroup, Col } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

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
      <div class="logincontainer">
        <Form>
       <FormGroup row>
         <Label for="exampleEmail" sm={2}>Email</Label>
         <Col sm={10}>
           <Input type="email" name="email" id="exampleEmail" placeholder="mary@jane.com" />
         </Col>
       </FormGroup>
       <FormGroup row>
         <Label for="examplePassword" sm={2}>Password</Label>
         <Col sm={10}>
           <Input type="password" name="password" id="examplePassword" placeholder="enter password here" />
         </Col>
       </FormGroup>

       <FormGroup check row>
         <Col sm={{ size: 10 }}>
           <Button color="success">Submit</Button>
         </Col>
       </FormGroup>
     </Form>
      </div>
    )
  }
}
