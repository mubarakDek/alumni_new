import React from "react";
import "../donate/donateStyle.scss";
import Hero from "../../components/hero/Hero";
import SectionTitle from "../../components/SectionTitle";
import Input from "../../components/input/Input";

function Donate() {
  return (
    <section className="contact_page">
      <Hero title="Contact Us" />
      <div className="contact_page_content mx-auto p-5">
        <SectionTitle title="Donate" />
        <div className="contact_page_content_wrap">
          <div className="contact_page_content_wrap_info">
            <h2>Please send your DONATION to these accounts</h2>
            <div className="address">
              <h3>ZAAD</h3>
              <p>494949449</p>
            </div>
            <div className="email">
              <h3>EDAHAB</h3>
              <p>373747474</p>
            </div>
            <div className="phone">
              <h3>Online donation! Coming soon ...</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
