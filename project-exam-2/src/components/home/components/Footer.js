import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="footer-container">
      <div className="footer-info-container">
        <Link className="footer-links" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="footer-links" to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link className="footer-links" to="/login">
          <h4>Social Media</h4>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-snapchat"></i>
        </Link>
        <Link className="footer-links" to="/newsletter">
          <h4>Newsletter</h4>
        </Link>
      </div>
      <div className="copyright-container">
        <p>2022 Minh Cong Bui Home Studio. All Rights Reserved.</p>
      </div>
    </main>
  );
}

export default Footer;
