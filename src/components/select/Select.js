import React from "react";
import "../select/selectStyle.scss";

function Select({ label, name, children }) {
  return (
    <div className="select input">
      <label htmlFor={name}>{label}</label>
      <select>{children}</select>
    </div>
  );
}

export default Select;
