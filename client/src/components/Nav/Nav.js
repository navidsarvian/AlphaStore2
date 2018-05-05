import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from "react-router-dom";


const Nav1 = () =>
//   <nav className="navbar navbar-inverse navbar-top">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="collapsed navbar-toggle">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" /> <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>

//         <a href="/" className="navbar-brand">
//           React Reading List
//         </a>
//         <a href="/" className="navbar-brand">
//           React Reading List
//         </a>
//       </div>
//     </div>
//   </nav>;
<div>
<Navbar>

<Navbar.Header>
    <Navbar.Brand>
      {/* <a href="#brand"><img src="https://www.w3schools.com/images/w3schools_green.jpg"><img </a> */}
    </Navbar.Brand>
    <Navbar.Toggle />
    <a href="localhost:3000"><img src="https://i.imgur.com/w2EwBqs.png?1" title="Gone Green Logo" width="120px" height="120px" class="GGLog" alt=""/></a>

  </Navbar.Header>


  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        <li className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/">
        Home
        </Link>
        </li>
      </NavItem>

      {/* <NavItem eventKey={2} href="#">
        Link
      </NavItem> */}
      <NavDropdown eventKey={3} title="Shop" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Sale Items</MenuItem>
        <MenuItem eventKey={3.2}>Flowers</MenuItem>
        <MenuItem eventKey={3.3}>Concentrates</MenuItem>
        <MenuItem eventKey={3.4}>Edibles</MenuItem>
        {/* <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
      </NavDropdown>
    </Nav>
    <Nav pullCenter>

      <NavItem eventKey={1} href="#">
      <li className={window.location.pathname === "/login" ? "active" : ""}>
        <Link to="/login">
        Login
        </Link>
        </li>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <li className={window.location.pathname === "/register" ? "active" : ""}>
        <Link to="/register">
        Register
        </Link>
        </li>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <li className={window.location.pathname === "/cart" ? "active" : ""}>
        <Link to="/cart">
        Cart
        </Link>
        </li>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <li className={window.location.pathname === "/profile" ? "active" : ""}>
        <Link to="/profile">
        Your Profile
        </Link>
        </li>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>;



export default Nav1;
