import React from "react";
import "../singleNews/singleNewsStyle.scss";
import Hero from "../../components/hero/Hero";
import { Link } from "@reach/router";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function SingleNews({ id, imgId }) {
  const { data } = useSWR(`${apiURL}/items/news/${id}`);

  // get Image
  const { data: image } = useSWR(`${apiURL}/files/${imgId}`);

  let img = "./images/news_placeholder.jpg";
  if (image) {
    img = image.data.data.full_url;
  }

  if (data) {
    const news = data.data;
    console.log(news);
    return (
      <section className="singleNews">
        <Hero title="News Page" />
        <div className="singleNews_content mx-auto p-5">
          <div className="posted_on">
            <p>
              Posted on <span>{formatDate(news.created_on)}</span>
            </p>
            <Link to="/news" className="btn-primary">
              Back to News
            </Link>
          </div>

          <div className="singleNews_content_wrap">
            <h1>{news.title}</h1>
            <div className="img_container">
              <img src={img} alt="aboutImage" />
            </div>
            <div className="paragraph">
              <div dangerouslySetInnerHTML={{ __html: news.body }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

function formatDate(date) {
  return date ? date.split("T")[0] : "";
}
export default SingleNews;
