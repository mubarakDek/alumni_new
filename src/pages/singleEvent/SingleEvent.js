import React from "react";
import "../singleEvent/singleEventStyle.scss";
import Hero from "../../components/hero/Hero";
import { Link } from "@reach/router";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function SingleEvent({ id, imgId }) {
  const { data } = useSWR(`${apiURL}/items/event/${id}`);

  // get Image
  const { data: image } = useSWR(`${apiURL}/files/${imgId}`);

  let img = "./images/news_placeholder.jpg";
  if (image) {
    img = image.data.data.full_url;
  }

  if (data) {
    const event = data.data;

    return (
      <section className="singleNews">
        <Hero title="Event Page" />
        <div className="singleNews_content mx-auto p-5">
          <div className="posted_on">
            <p>
              Posted on <span>{formatDate(event.created_on)}</span>
            </p>
            <Link to="/events" className="btn-primary">
              Back to Events
            </Link>
          </div>

          <div className="singleNews_content_wrap">
            <h1>{event.description}</h1>
            <div className="img_container">
              <img src={img} alt="aboutImage" />
            </div>
            <div className="body">
              <div dangerouslySetInnerHTML={{ __html: event.body }}></div>
            </div>
            <div className="event_info">
              <p>
                <span>Date: </span>
                {event.date}
              </p>
              <br />
              <p>
                <span>Time: </span>
                {event.time}
              </p>
              <br />
              <p>
                <span>Location: </span>
                {event.location}
              </p>
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
export default SingleEvent;
