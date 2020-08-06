import React, { useState } from "react";
import "./selectStyle.scss";

function Select({ title }) {
  const [active, setActive] = useState(false);

  function handleToggle(e) {
    setActive(!active);
  }
  return (
    <div className="wrapper">
      <div
        className={
          active ? "wrapper_select_wrap active" : "wrapper_select_wrap"
        }
      >
        <ul className="default_option">
          <li onClick={handleToggle} className="option">
            {title}
          </li>
          <ul className="select_ul">
            <li className="option">option 1</li>
            <li className="option">option 1</li>
            <li className="option">option 1</li>
            <li className="option">option 1</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Select;
