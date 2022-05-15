import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Navbar() {
  return (
    <NavBar className="navbar" expand={false}>
      <Container className="container">
        <NavBar.Brand className="navbar-brand" href="/">
          Holidaze
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/hotels">
              Hotels
            </NavLink>
            <NavLink className="link" to="/admin">
              Admin
            </NavLink>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default Navbar;
