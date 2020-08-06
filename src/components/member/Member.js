import React from "react";
import "./memberStyle.scss";

function Member() {
  return (
    <div className="member">
      <figure className="member_img">
        <img src="./images/building.jpg" alt="board member" />
      </figure>
      <h3 className="mt-1">Mukhtar Mohamed</h3>
      <p>Senior Lecturer</p>
    </div>
  );
}

export default Member;
