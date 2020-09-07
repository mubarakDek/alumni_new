import React from "react";
import "../input/inputStyle.scss";

function Input({ label, name, className, ...attributes }) {
  return (
    <div className={`input ${className}`}>
      {!className === "radio" ? <label htmlFor={name}>{label}</label> : ""}
      <input name={name} {...attributes} autoComplete="on" />
      {className === "radio" ? (
        <label htmlFor={name} style={{ marginLeft: "6px", marginTop: "-3px" }}>
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
