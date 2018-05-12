import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Nav1 = () => {
  return (
    <div>
  <Navbar>



    <Navbar.Collapse>
      <Nav>
            <NavItem>
              <img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="120px" height="120px" className="GGLogo header" alt="company logo"/>
            </NavItem>

          <LinkContainer to="/">
            <NavItem eventKey={2} href="#">
              Home
            </NavItem>
          </LinkContainer>


      </Nav>
      <Nav>

      <LinkContainer to="/login">
        <NavItem eventKey={4} href="#">
          Login
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/register">
        <NavItem eventKey={5} href="#">
          Register
          </NavItem>
          </LinkContainer>


      </Nav>
      <Nav pullRight>
      <LinkContainer to="/cart">
        <NavItem eventKey={6} href="#">
          Cart
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/profile">
        <NavItem eventKey={7} href="#">
          Your Profile
        </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
  );
}

export default Nav1;
