import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
        <div id="social">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-snapchat"></i>
        </div>
        <p>Copyright 2020</p>
      </div>
    </div>
  );
}

export default Footer;
