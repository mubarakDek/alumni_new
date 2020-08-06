import React from "react";
import "../input/inputStyle.scss";

function Input({ label, type, name, placeholder }) {
  return (
    <div className="input">
      <label for={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
