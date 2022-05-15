import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Navbar() {
  return (
    <NavBar className="navbar navbar-dark" expand={false}>
      <Container className="container">
        <NavBar.Brand className="navbar-brand" href="/">
          Holidaze
        </NavBar.Brand>
        <div className="button-container">
          <Button className="login-button">login</Button>
          <Button variant="danger" className="logout-button">
            log out
          </Button>
          <NavBar.Toggle
            className="navbar-burger"
            aria-controls="basic-navbar-nav"
          />
          <NavBar.Collapse
            className="navbar-dropdown-container"
            id="basic-navbar-nav"
          >
            <Nav className="me-auto">
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/hotels">
                Hotels
              </NavLink>
              <NavLink className="link admin-link" to="/admin">
                Admin
              </NavLink>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </NavBar.Collapse>
        </div>
      </Container>
    </NavBar>
  );
}

export default Navbar;
