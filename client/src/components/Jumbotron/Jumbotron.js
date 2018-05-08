import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbotron.css';
// import video from '../../public/674157371.mp4';

const Jumbo = (props) => {
  return (
  <div class="container" width="100%" height="30%">
    <div className="Jumbotron">
      <Jumbotron fluid>
      <video id="video-background" autoPlay="true" loop="loop" preload="metadata" muted="muted">
          <source src="/674157371.mp4" type="video/mp4"/>
      </video>
        <Container fluid>
          <img src="https://i.imgur.com/w2EwBqs.png?1" width="180px" height="180px" class="GGLog"/>
          <p className="lead">This is a modified jumbotron</p>
          <a id="button" class="btn btn-outline-success" data-toggle="modal" data-target="#ageModal" role="button">Login</a>
          <button type="button" class="btn btn-outline-success">Register</button>
        </Container>
      </Jumbotron>
    </div>
  </div>
  );
};


// <video id="bg-video" autoplay="true" loop="loop" preload="metadata" muted="muted">
//   <source src="assets\Bar_Vid.mp4" type="video/mp4"/>
// </video>

export default Jumbo;
