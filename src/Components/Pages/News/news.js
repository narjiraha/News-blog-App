import React, { useContext } from "react";
import "./NewsDetils.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Store } from "../../JsonStorage/JsonStorage";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import yt from "../images/youtube.png";
import clap from "../images/rythm.png";
import share from "../images/share.png";
import BottomNews from "../BottomNews/BottomNews";

const News = () => {
  let params = useParams();
  let newsId = params.id;
  const [news] = useContext(Store);
  const newsDetails = news.filter((item) => item.id === newsId);

  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate("/");
  };

  return (
    <div>
      <div className="top-bar-btn-logo">
        <div className="header-text">
          <h1>
            <NavLink className="list-item" to="/">
              <span className="the">The</span>
              <span className="siren">Siren</span>
            </NavLink>
          </h1>
        </div>

        <div>
          <button>Get Started</button>
        </div>
      </div>

      <div className="news-details-container">
        {/* Share clap section */}
        <div className="share-news-clap">
          <div>
            <div className="clap">
              <img src={clap} alt="not found"></img>
              <dv>
                <p>9.3 k</p>
              </dv>
            </div>
            <div className="share">
              <img src={share} alt="not found"></img>
              <div>
                <p>Share this article</p>
              </div>
            </div>
          </div>
        </div>

        <div className="news-details">
          <div className="creator-detail">
            <div>
              <div className="name-logo">
                <img className="profile" src={logo} alt="loading" />
                <div className="heading-para">
                  <h4>Dmitry Nozhenko</h4>
                  <p>August 06,2023.10min read </p>
                </div>
              </div>
            </div>
            <div className="social-medIcons">
              <img className="icon" src={facebook} alt="not-found"></img>
              <img className="icon" src={instagram} alt="not-found"></img>
              <img className="icon" src={twitter} alt="not-found"></img>
              <img className="icon" src={yt} alt="not-found"></img>
            </div>
          </div>

          <div className="particular-news-details-container">
            <h2>{newsDetails[0].heading}</h2>
            <img src={newsDetails[0].image} alt="not-found"></img>
            <p>{newsDetails[0].content}</p>
          </div>
        </div>
      </div>
      <div className="BackBTN">
        <button className="backBtn" onClick={GoBack}>
          Go back
        </button>
      </div>
      <BottomNews />
    </div>
  );
};

export default News;
