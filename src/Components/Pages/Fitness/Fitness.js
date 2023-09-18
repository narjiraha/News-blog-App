import React, { useContext } from "react";
import "./Fitness.css";
import { Store } from "../../JsonStorage/JsonStorage";
import { Link } from "react-router-dom";
import video from "../images/ad_01.mp4";
import Header from "../../Header/Header";
import Navbar2 from "../../Navbar2/Navbar2";

const Fitness = () => {
  const [fitnessNews] = useContext(Store);
  console.log(fitnessNews);

  const fitness = fitnessNews.filter((item) => item.category === "fitness");
  return (
    <div>
      <div className="header-nav">
        <Header />
        <Navbar2 />
      </div>
      <div className="fitness-parent-container">
        {/* left Container */}
        <div className="fitness-left-container">
          <>
            <h1 class="underline-text">Fitness</h1>
            {fitness.slice(0, 12).map((item) => (
              <Link to={`/news/${item.id}`} className="news-link">
                <div className="news-card">
                  <div className="news-img">
                    <img src={item.image} alt="Not found"></img>
                  </div>
                  <div className="news-content">
                    <h2>{item.heading}</h2>
                    <p className="news-detail">{item.content}</p>
                    <p className="published-date">{item.publishedAt}</p>
                  </div>
                  <hr></hr>
                </div>
              </Link>
            ))}
          </>
        </div>

        {/* Right -Container */}
        <div className="fitness-right-container">
          <>
            <h1 class="underline-text">Top Post</h1>
            <div className="fitness-right">
              {fitness.slice(0, 10).map((item) => (
                <Link to={`/news/${item.id}`} className="news-link">
                  <div className="news-card">
                    <div className="news-img">
                      <img src={item.image} alt="Not found"></img>
                    </div>
                    <div className="news-content">
                      <h2>{item.heading}</h2>
                      <p className="news-detail">{item.content}</p>
                      <p className="published-date">{item.publishedAt}</p>
                    </div>
                    <hr></hr>
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

export default Fitness;
