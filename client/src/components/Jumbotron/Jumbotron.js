import React from 'react';
import { Jumbotron, Container, Button, ButtonGroup } from 'reactstrap';
import './Jumbotron.css';
// import video from '../../public/674157371.mp4';

const Jumbo = (props) => {
  return (
  <div className="container" width="100%" height="30%">
    <div className="Jumbotron">


      <video id="video-background" autoPlay="true" loop="loop" preload="metadata" muted="muted">
          <source src="/674157371.mp4" type="video/mp4"/>
      </video>

      <div className="logo">
        <img src="https://i.imgur.com/w2EwBqs.png?1" width="250px" height="250px" className="GGLog"/>
        <p className="lead">Medicinal Marijuana Delivery</p>
        <ButtonGroup>
        <button type="button" className="button" role="button">Login</button>
        <button type="button" className="button">Register</button>
        <br></br>
        <br></br>
        <br></br>
      </ButtonGroup>
      </div>

    </div>
  </div>
  );
};


// <video id="bg-video" autoplay="true" loop="loop" preload="metadata" muted="muted">
//   <source src="assets\Bar_Vid.mp4" type="video/mp4"/>
// </video>

export default Jumbo;
