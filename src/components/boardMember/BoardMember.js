import React from "react";
import "./boardMemberStyle.scss";

function BoardMember() {
  return (
    <div className="board_member">
      <div className="board_member_content">
        <figure className="board_member_content_img">
          <img src="./images/building.jpg" alt="board member" />
        </figure>
        <p>Raqiiq Muluqon Wadejo</p>
        <p>Takaful Insurance Co.</p>
        <p>Hargeisa, Somaliland</p>
        <p>raqiiq@gmail.com</p>
      </div>
    </div>
  );
}

export default BoardMember;
