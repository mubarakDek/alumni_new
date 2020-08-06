import React from "react";

function News() {
  return (
    <section className="news">
      <figure className="news_figure">
        <img
          className="news_figure_image"
          src="./images/building.jpg"
          alt="news_image"
        ></img>
      </figure>
      <div>
        <p className="news_date">25 May 2020</p>
        <h3 className="news_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta!
        </h3>
      </div>
    </section>
  );
}

export default News;
