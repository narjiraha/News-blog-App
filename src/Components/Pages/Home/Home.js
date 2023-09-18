import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Store } from "../../JsonStorage/JsonStorage";
import video from "../images/ad_01.mp4";
import Header from "../../Header/Header";
import Navbar2 from "../../Navbar2/Navbar2";

const Home = () => {
  const [homeNews] = useContext(Store);

  return (
    <div>
      <div className="header-nav">
        <Header />
        <Navbar2 />
      </div>
      <div className="home-container">
        <div className="grid-structure">
          {/* Left single news */}
          <div className="left-single-news">
            {homeNews.slice(2, 3).map((item) => (
              <div>
                <Link to={`/news/${item.id}`} className="news-link">
                  <img src={item.image} alt="not-found"></img>
                </Link>
                {/* <h1>{item.heading}</h1>
              <p>{item.description}</p> */}
              </div>
            ))}
          </div>

          {/* Right two news */}
          <div className="top-to-bottom">
            <div className="right-upper-news">
              {homeNews.slice(1, 2).map((item) => (
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                  </Link>
                  {/* <h1>{item.heading}</h1>
                <p>{item.description}</p> */}
                </div>
              ))}
            </div>

            <div className="right-lower-news">
              {homeNews.slice(49, 50).map((item) => (
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News row with four cards */}
        <div className="Latest-cat">
          <h1 class="underline-text">The Latest</h1>
        </div>

        <div className="news-row-four">
          <div>
            {homeNews.slice(45, 46).map((item) => (
              <div className="news-section">
                <Link to={`/news/${item.id}`} className="news-link">
                  <img src={item.image} alt="not-found"></img>
                  <div className="head-desc-para">
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                    <p>{item.publishedAt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {homeNews.slice(43, 44).map((item) => (
              <div className="news-section">
                <Link to={`/news/${item.id}`} className="news-link">
                  <img src={item.image} alt="not-found"></img>
                  <div className="head-desc-para">
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                    <p>{item.publishedAt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {homeNews.slice(41, 42).map((item) => (
              <div className="news-section">
                <Link to={`/news/${item.id}`} className="news-link">
                  <img src={item.image} alt="not-found"></img>
                  <div className="head-desc-para">
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                    <p>{item.publishedAt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="latestnews-container">
          {/* Latest news */}
          <div className="latestNews">
            <h1 class="underline-text">Latest Articles</h1>
            {homeNews.slice(34, 40).map((item, i) => (
              <Link to={`/news/${item.id}`} className="news-link">
                <div className="news-card" key={i}>
                  <div>
                    <img
                      className="latest-news-img"
                      src={item.image}
                      alt="News Thumbnail"
                    />
                  </div>
                  <div className="latest-news-content">
                    <div>
                      <h3>{item.heading}</h3>
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <p>{item.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="right-section">
            {/* Advertising section */}
            <div className="advertising">
              <div>
                <h1 className="underline-text">Advertising</h1>
                <video controls className="video">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
            <h1 class="underline-text">Top Post</h1>
            <div className="one-news-card">
              {homeNews.slice(30, 37).map((item, i) => (
                <Link to={`/news/${item.id}`} className="news-link">
                  <div className="news-card-right" key={i}>
                    <img
                      className="latest-news-img"
                      src={item.image}
                      alt="News Thumbnail"
                    />
                    <div className="latest-news-content">
                      <div>
                        <h3>{item.heading}</h3>
                      </div>
                      <div>
                        <p>{item.description}</p>
                      </div>
                      <div>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Last second bottom section */}
        <div className="last-section-bottom-section">
          <div className="bottom-left-big-card">
            {homeNews.slice(24, 25).map((item) => (
              <div>
                <Link to={`/news/${item.id}`} className="news-link">
                  <img src={item.image} alt="not-found"></img>
                  <p>{item.publishedAt}</p>
                </Link>
                {/* <h1>{item.heading}</h1>
              <p>{item.description}</p> */}
              </div>
            ))}
          </div>

          <div className="bottom-right-three-small-card">
            {homeNews.slice(20, 23).map((item) => (
              <div className="bottom-right-three-small-card-content">
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                  </Link>
                  {/* <h1>{item.heading}</h1>
                <p>{item.description}</p> */}
                  <p>{item.publishedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Bottom section */}
        <div className="bottom-end-section">
          {/* First card */}
          <div>
            <div className="bottom-first-card">
              {homeNews.slice(19, 20).map((item) => (
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                    <p>{item.publishedAt}</p>
                  </Link>
                  {/* <h1>{item.heading}</h1>
              <p>{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Second Card */}
          <div>
            <div className="bottom-second-card">
              {homeNews.slice(17, 18).map((item) => (
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                    <p>{item.publishedAt}</p>
                  </Link>
                  {/* <h1>{item.heading}</h1>
              <p>{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Third card */}
          <div>
            <div className="bottom-third-card">
              {homeNews.slice(15, 16).map((item) => (
                <div>
                  <Link to={`/news/${item.id}`} className="news-link">
                    <img src={item.image} alt="not-found"></img>
                    <p>{item.publishedAt}</p>
                  </Link>
                  {/* <h1>{item.heading}</h1>
              <p>{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
