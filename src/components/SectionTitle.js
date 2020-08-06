import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="section_title mb-5">
      <h1>{title}</h1>
      <div className="line mt-2">
        <div className="line_center"></div>
      </div>
    </div>
  );
}

export default SectionTitle;
