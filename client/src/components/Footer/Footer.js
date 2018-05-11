import React from 'react';
import { Footer, Container, hr, h6, Column, Row } from 'reactstrap';
import './Footer.css';
const map = '/campus map.png';

const Footer1 = () => {
  return (

<div className="footer" id="footer">
<footer className="page-footer font-small blue pt-4 mt-4">
    <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
                <h3 className="alpha">Team Alpha</h3>
                <ul className="team">
                <li>Cindy</li>
                <li>Lissa</li>
                <li>Navid</li>
                <li>Robel</li>
                </ul>
                <div>
                  <ul className="list-unstyled">
                      <li>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-youtube"></a>
                      </li>
                  </ul>
                </div>
            </div>
            <div className="col-md-6">
                <h2 className="text-uppercase">Contact Us</h2>
                <h4>1145 Gayley Ave, Los Angeles, CA 90024</h4>
                <img src={map} alt="map"></img>
            </div>
        </div>
    </div>
    </footer>
    </div>



    );
    };




export default Footer1;
