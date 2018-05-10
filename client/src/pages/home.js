import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import Products from "../components/ProductCards";
import Footer1 from "../components/Footer";

export default class Home extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <div>
                <h1> home page</h1>
                    <div>
                        <Jumbo />
                        <Products /> 
                        <Footer1 />
                    </div>
            </div>
        )
    }
}