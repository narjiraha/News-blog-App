import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-text">
      <h1>
        <div className="the-siren">
          <NavLink className="list-item" to="/">
            <span className="the">The</span>
            <span className="siren">Siren</span>
          </NavLink>
        </div>
      </h1>
    </div>
  );
};

export default Header;
