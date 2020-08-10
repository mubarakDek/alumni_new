import React from "react";
import { Link } from "@reach/router";

// api url
import { apiURL } from "../globals";

// swr library
import useSWR from "swr";

function News({ title, imgId, createOn, newsId }) {
  const { data } = useSWR(`${apiURL}/files/${imgId || 1}`);
  let img = "./images/news_placeholder.jpg";
  if (data) {
    img = data.data.data.full_url;
  }
  return (
    <Link to={`/singleNews/${newsId}/${imgId}`} className="news">
      <figure className="news_figure">
        <img className="img" src={img || ""} alt="news_image"></img>
      </figure>
      <div>
        <p className="news_date">{formatDate(createOn)}</p>
        <h3 className="news_title">{title}</h3>
      </div>
    </Link>
  );
}

function formatDate(date) {
  return date ? date.split("T")[0] : "";
}

export default News;
