import React from "react";
import "../contact/contactStyle.scss";
import Hero from "../../components/hero/Hero";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  return (
    <section className="contact_page">
      <Hero title="Contact Us" />
      <div className="contact_page_content mx-auto p-5">
        <SectionTitle title="Contact Us" />
        <div className="contact_page_content_wrap">
          <div className="contact_page_content_wrap_info">
            <h2>Contact Info:</h2>
            <div className="address">
              <h3>Adress</h3>
              <p>150 street Hargeisa, Somaliland</p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>alumni@admasuniversity.com</p>
            </div>
            <div className="phone">
              <h3>Phone</h3>
              <p>+252 63 8908098</p>
            </div>
          </div>

          <div className="contact_page_content_wrap_message">
            <h2>Leave Us Your Message</h2>
            <form>
              <div className="user_info">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div className="btn">
                <button className="btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
