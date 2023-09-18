import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import theSiren from "../images/The-siren.svg";
import facebook from "../images/facebook.png";
import instagram from "../images/Instagram_icon.png";
import twitter from "../images/twitter.png";
import yt from "../images/youtube.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      {/* The siren */}
      <div>
        <div className="the-sirelogo-container">
          <img className="the-siren-logo" src={theSiren} alt="not-found"></img>
          <h1>The Siren</h1>
        </div>
        <p className="text">
          Experience real-time updates and stay informed with The Siren.
          <p>your go-to news app. Dive into</p>
          <p>a world of curated stories</p>
          <p>spanning the latest headLinknes,</p>
          <p>in-depth features, and breaking news,</p>
          <p>all deLinkvered seamlessly to your fingertips.</p>
        </p>
        <div className="social-medIcons">
          <img className="icon" src={facebook} alt="not found"></img>
          <img className="icon" src={instagram} alt="not found"></img>
          <img className="icon" src={twitter} alt="not found"></img>
          <img className="icon" src={yt} alt="not found"></img>
        </div>
      </div>

      {/* Services */}
      <div>
        <h1 className="text">Service</h1>
        <ul className="ul-list">
          <Link className="link-text" to="/">
            <li onClick={scrollToTop}>Home</li>
          </Link>
          <Link className="link-text" to="/bollywood">
            <li onClick={scrollToTop}>Bollywood</li>
          </Link>
          <Link className="link-text" to="/hollywood">
            <li onClick={scrollToTop}>Hollywood</li>
          </Link>
          <Link className="link-text" to="/food">
            <li onClick={scrollToTop}>Food</li>
          </Link>
          <Link className="link-text" to="/fitness">
            <li onClick={scrollToTop}>Fitness</li>
          </Link>
          <Link className="link-text" to="/technology">
            <li onClick={scrollToTop}>Technology</li>
          </Link>
        </ul>
      </div>

      {/* Resouces */}
      <div>
        <h1 className="text">Resouces</h1>
        <ul className="ul-list">
          <Link className="link-text" to="/">
            <li onClick={scrollToTop}>Home</li>
          </Link>
          <Link className="link-text" to="/help">
            <li onClick={scrollToTop}>Get Help</li>
          </Link>
          <Link className="link-text" to="/contact">
            <li onClick={scrollToTop}>Contact Us</li>
          </Link>
        </ul>
      </div>

      {/*More  */}
      <div>
        <h1 className="text">More</h1>
        <ul className="ul-list">
          <li>Home</li>
          <li>Help</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
