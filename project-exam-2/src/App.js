import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import DrinkDetail from "./components/drinks/DrinkDetail";
import Contact from "./components/contact/Contact";
import DrinkList from "./components/drinks/DrinkList";
import Login from "./components/login/Login";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <Router>
      <div>
        <NavBar className="navbar" expand="lg">
          <Container className="container">
            <NavBar.Brand href="/">JS Frameworks</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="link" to="/">
                  Drinks
                </NavLink>
                <NavLink className="link" to="/login">
                  Login
                </NavLink>
                <NavLink className="link" to="/contact">
                  Contact
                </NavLink>
              </Nav>
            </NavBar.Collapse>
          </Container>
        </NavBar>
        <Routes>
          <Route exact path="/" element={<DrinkList />} />
          <Route path="/detail/:id" element={<DrinkDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
