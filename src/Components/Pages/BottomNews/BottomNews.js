import React, { useContext } from "react";
import "./BottomNews.css";
import { Store } from "../../JsonStorage/JsonStorage";
import { Link } from "react-router-dom";

const BottomNews = () => {
  const [bollywoodNews] = useContext(Store);
  console.log(bollywoodNews);

  const bollywood = bollywoodNews.filter(
    (item) => item.category === "hollywood"
  );

  return (
    <div className="bottom-news-container">
      {bollywood.slice(2, 5).map((item) => (
        <Link to={`/news/${item.id}`} className="news-link" key={item.id}>
          <div className="news-container">
            <div className="news-img-details">
              <img src={item.image} alt="Not found" />
              <div className="news-details">
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
                <p>{item.publishedAt}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNews;
