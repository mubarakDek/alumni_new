import React from "react";
import { Link } from "@reach/router";
import AccountDropdown from "./accountDropdown/Account";

function Navbar() {
  const handleToggle = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  };

  return (
    <nav className="nav">
      <div className="main-navigation">
        <div className="brand">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </div>
        <ul className="menu active">
          <Link className="menu_link" to="/">
            Home
          </Link>
          <div className="dropdown">
            <Link className="menu_link" to="/about">
              Alumni <span className="fontawesome-angle-down"></span>
            </Link>
            <ul className="sub-menu">
              <Link className="menu_link" to="/events">
                Events
              </Link>
              <Link className="menu_link" to="/news">
                News
              </Link>
              <Link className="menu_link" to="/board">
                Board
              </Link>
              <Link className="menu_link" to="/members">
                Members
              </Link>
            </ul>
          </div>
          <Link className="menu_link" to="/donate">
            Donate
          </Link>
          <Link className="menu_link" to="/about">
            About
          </Link>
          <Link className="menu_link" to="/contact">
            Contact
          </Link>
          <Link className="btn menu_link" to="/login">
            Login
          </Link>
          <AccountDropdown className="user" />
        </ul>
        <div onClick={handleToggle} className="toggle fontawesome-list"></div>
      </div>
    </nav>
  );
}

export default Navbar;
