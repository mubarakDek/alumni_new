import React from "react";
import "../select/selectStyle.scss";

function Select({ label, name, children, ...attributes }) {
  return (
    <div className="select input">
      <label htmlFor={name}>{label}</label>
      <select name={name} {...attributes}>
        {children}
      </select>
    </div>
  );
}

export default Select;
