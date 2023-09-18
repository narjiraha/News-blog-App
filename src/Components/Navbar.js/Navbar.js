import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <ul className="navbar-menu">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/bollywood" className="nav-item">
          Bollywood
        </Link>
        <Link to="/hollywood" className="nav-item">
          Hollywood
        </Link>
        <Link to="/food" className="nav-item">
          Food
        </Link>
        <Link to="/fitness" className="nav-item">
          Fitness
        </Link>
        <Link to="/technology" className="nav-item">
          Technology
        </Link>
      </ul>

      {/* Hemburger menu */}

      <hr></hr>
    </navbar>
  );
};

export default Navbar;
