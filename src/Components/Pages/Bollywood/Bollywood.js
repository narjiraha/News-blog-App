import React, { useContext } from "react";
import "./Bollywood.css";
import { Store } from "../../JsonStorage/JsonStorage";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import video from "../images/ad_01.mp4";
import Header from "../../Header/Header";
import Navbar2 from "../../Navbar2/Navbar2";

const Bollywood = () => {
  const data = useLocation();
  console.log(data);

  const [bollywoodNews] = useContext(Store);
  console.log(bollywoodNews);

  const bollywood = bollywoodNews.filter(
    (item) => item.category === "bollywood"
  );

  return (
    <div>
      <div className="header-nav">
        <Header />
        <Navbar2 />
      </div>
      <div className="bollywood-parent-container">
        {/* left Container */}
        <div className="bollywood-left-container">
          <>
            <h1 class="underline-text">Bollywood</h1>
            {bollywood.slice(0, 12).map((item) => (
              <Link to={`/news/${item.id}`} className="news-link">
                <div className="news-card">
                  <div className="news-img">
                    <img src={item.image} alt="Not found"></img>
                  </div>
                  <div className="news-content">
                    <h2>{item.heading}</h2>
                    <p className="news-detail">{item.description}</p>
                    <p className="published-date">{item.publishedAt}</p>
                  </div>
                  <hr></hr>
                </div>
              </Link>
            ))}
          </>
        </div>

        {/* Right -Container */}
        <div className="bollywood-right-container">
          <>
            <h1 class="underline-text">Top Post</h1>
            <div className="bollywood-news-container-right">
              {bollywood.slice(0, 10).map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="news-link"
                >
                  <div className="news-card">
                    <div className="news-img">
                      <img src={item.image} alt="Not found" />
                    </div>
                    <div className="news-content">
                      <h2 className="news-heading">{item.heading}</h2>
                      <p className="news-detail">{item.description}</p>
                      <p className="published-date">{item.publishedAt}</p>
                    </div>
                    <hr />
                  </div>
                </Link>
              ))}
            </div>
          </>

          {/* Advertising Section */}
          <div>
            <div className="advertising_box">
              <h1>Advertising</h1>
              <video controls className="video">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bollywood;
