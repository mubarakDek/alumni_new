import React from "react";
import { Link } from "@reach/router";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_logo">
          <img src="./images/logo.png" alt="logo"></img>
        </div>

        <div className="footer_nav">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/donate">Donate</Link>
        </div>

        <div className="footer_social">
          <Link to="/">
            <span className="icon fontawesome-twitter"></span>Twitter
          </Link>
          <Link to="/">
            <span className="icon fontawesome-facebook"></span>Facebook
          </Link>
        </div>

        <div className="footer_info">
          <p>150 Street</p>
          <p>Hargeisa, Somaliland</p>
          <p>+252 63 4441484</p>
          <p>alumni@admasuniversity.com</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>@admasuniversity 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
