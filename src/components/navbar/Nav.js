import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Assets/chef_logo.png";

export const Nav = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">
          {" "}
          <img className="nav-logo" alt="Chef logo" src={logo} />
          Chef Hub
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
