import React, { useState } from "react";
import "./filterSelectStyle.scss";

function FilterSelect({ title, options, filterData }) {
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
            {options?.length > 0 ? (
              options.map(function (item, index) {
                return (
                  <li
                    key={index}
                    onClick={() => filterData(item)}
                    className="option"
                  >
                    {item}
                  </li>
                );
              })
            ) : (
              <li>No option</li>
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default FilterSelect;
