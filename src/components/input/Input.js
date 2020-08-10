import React from "react";
import "../input/inputStyle.scss";

function Input({ label, name, ...attributes }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input name={name} {...attributes} autoComplete="on" />
    </div>
  );
}

export default Input;
