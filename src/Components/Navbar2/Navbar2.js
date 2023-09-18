import React, { useState } from "react";
import "../Navbar2/Navbar2.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav className="main-nav">
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="menu-link-list">
            <li>
              <NavLink onClick={scrollToTop} className="list-item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                className="list-item"
                to="/bollywood"
              >
                Bollywood
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                className="list-item"
                to="/hollywood"
              >
                Hollywood
              </NavLink>
            </li>
            <li>
              <NavLink onClick={scrollToTop} className="list-item" to="/food">
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                className="list-item"
                to="/fitness"
              >
                Fitness
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                className="list-item"
                to="/technology"
              >
                Technology
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <div
              className="hamburger"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              {showMediaIcons ? <GrClose /> : <GiHamburgerMenu />}{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
