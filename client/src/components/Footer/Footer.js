import React from 'react';
import { Footer, Container, hr, h6, Column, Row } from 'reactstrap';
import './Footer.css';


const Footer1 = () => {
  return (

<div className="footer" id="footer">
<footer className="page-footer font-small blue pt-4 mt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
            </div>

            <div className="col-md-6">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
    </div>



    );
    };




export default Footer1;
