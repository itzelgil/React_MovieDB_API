import React from "react";
import logo from "./src/images/logo.png";

const Nav = () => {
  return (
    <nav className="teal accent-4">
      <div className="nav-wrapper container">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="brand-logo">
          Movie finder
        </a>
      </div>
    </nav>
  );
};

export default Nav;
