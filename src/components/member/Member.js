import React from "react";
import "./memberStyle.scss";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Member({ fname, lname, degree, imgId }) {
  const { data } = useSWR(`${apiURL}/files/${imgId || 17}`);
  let img = "./images/profile_placeholder.png";
  if (data) {
    img = data.data.data.full_url;
  }

  return (
    <div className="member">
      <figure className="member_img">
        <img src={img || ""} alt="member img" />
      </figure>
      <h3 className="mt-1">{fname + " " + lname}</h3>
      <p>{degree}</p>
    </div>
  );
}

export default Member;
