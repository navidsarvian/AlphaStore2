import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

const Nav1 = () => {
  return (
    <div>
  <Navbar>

  <Navbar.Header>
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Link to="/"><img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="120px" height="120px" className="GGLog" alt=""/></Link>

    </Navbar.Header>


    <Navbar.Collapse>
      <Nav>
          {/* <li className={window.location.pathname === "/" ? "active" : ""}> */}
          {/* </li> */}
          <LinkContainer to="/">
            <NavItem eventKey={1}>
              Home
            </NavItem>
          </LinkContainer>


        <NavDropdown eventKey={3} title="Shop" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Sale Items</MenuItem>
          <MenuItem eventKey={3.2}>Flowers</MenuItem>
          <MenuItem eventKey={3.3}>Concentrates</MenuItem>
          <MenuItem eventKey={3.4}>Edibles</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav>
      
      <LinkContainer to="/login">
        <NavItem eventKey={1} href="#">
        {/* <li className={window.location.pathname === "/login" ? "active" : ""}> */}
          Login
          {/* </li> */}
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/register">
        <NavItem eventKey={2} href="#">
        {/* <li className={window.location.pathname === "/register" ? "active" : ""}> */}
          Register
          {/* </li> */}
          </NavItem>
          </LinkContainer>


      </Nav>
      <Nav pullRight>
      <LinkContainer to="/cart">
        <NavItem eventKey={1} href="#">
        {/* <li className={window.location.pathname === "/cart" ? "active" : ""}> */}
          Cart
          {/* </li> */}
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/profile">
        <NavItem eventKey={2} href="#">
        {/* <li className={window.location.pathname === "/profile" ? "active" : ""}> */}
          Your Profile
          {/* </li> */}
        </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
  );
}

export default Nav1;
