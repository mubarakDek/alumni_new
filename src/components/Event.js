import React from "react";
import { Link } from "@reach/router";

function Event() {
  return (
    <Link to="/events" className="event">
      <div className="date">
        <h3>
          May <span>24</span>2020
        </h3>
      </div>
      <div className="title">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          corrupti animi temporibus.
        </h1>
      </div>
    </Link>
  );
}

export default Event;
