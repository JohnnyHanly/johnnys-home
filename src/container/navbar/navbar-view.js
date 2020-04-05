import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./styles.css";

var view = function() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Johnny's House</Navbar.Brand>
      <Nav className="mr-auto">
        <NavItem>
          <Nav.Link href="/music/home" to="/music/home">
            Music
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link  href="/lights" to="/lights">
            Lights
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link  href="/tv" to="/tv">
            TV
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default view;
