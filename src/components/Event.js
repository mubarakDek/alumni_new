import React from "react";
import { Link } from "@reach/router";

let year, month, day;

function Event({ title, date, imgId, eventId }) {
  if (date) {
    year = date.split("-")[0];
    month = date.split("-")[1];
    day = date.split("-")[2];
  }
  return (
    <Link to={`/singleEvent/${eventId}/${imgId}`} className="event">
      <div className="date">
        <h3>
          {month} <span>{day}</span> {year}
        </h3>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </Link>
  );
}

export default Event;
