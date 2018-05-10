import React from 'react';
import { Footer, Container, hr, h6, Column, Row } from 'reactstrap';
import './Footer.css';


const Footer1 = () => {
  return (

<div class="footer" id="footer">
<footer class="page-footer font-small blue pt-4 mt-4">
    <div class="container-fluid text-center text-md-left">
        <div class="row">
            <div class="col-md-6">
                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
            </div>

            <div class="col-md-6">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled">
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
