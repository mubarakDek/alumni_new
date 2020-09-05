import React from "react";
import "./boardMemberStyle.scss";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function BoardMember({ imgId, fname, lname, email, degree, department }) {
  const { data } = useSWR(`${apiURL}/files/${imgId || 18}`);
  let img = "./images/profile_placeholder_rectangle.png";
  if (data) {
    img = data.data.data.full_url;
  }

  return (
    <div className="board_member">
      <div className="board_member_content">
        <figure className="board_member_content_img">
          <img src={img || ""} alt="board member" />
        </figure>
        <h4>{fname + " " + lname}</h4>
        <p>{degree}</p>
        <p>{department}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default BoardMember;
