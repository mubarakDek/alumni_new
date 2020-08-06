import React from "react";
import "../hero/heroStyle.scss";
function Hero({ title }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;
