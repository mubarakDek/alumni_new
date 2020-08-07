import React from "react";
import { Link } from "@reach/router";

function News() {
  return (
    <Link to="/singleNews" className="news">
      <figure className="news_figure">
        <img className="img" src="./images/building.jpg" alt="news_image"></img>
      </figure>
      <div>
        <p className="news_date">25 May 2020</p>
        <h3 className="news_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta!
        </h3>
      </div>
    </Link>
  );
}

export default News;
