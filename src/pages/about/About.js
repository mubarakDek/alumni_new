import React, { useState, useEffect } from "react";
import "../about/aboutStyle.scss";
import Hero from "../../components/hero/Hero";
import SectionTitle from "../../components/SectionTitle";
import Loader from "../../components/loader";
import admasBuilding from "../../images/building.jpg";

import axios from "axios";

import { apiURL } from "../../globals";

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${apiURL}/items/general`);
      setAbout(response.data.data);
    };

    getData();
  }, []);

  return (
    <section className="about">
      <Hero title="About Us" />
      {!about.length ? (
        <Loader />
      ) : (
        <div className="about_content mx-auto p-5">
          <SectionTitle title="About Us" />
          <div className="about_content_wrap">
            <div className="about_content_wrap_left">
              <div className="img_container">
                <img src={admasBuilding} alt="aboutImage" />
              </div>
              <div className="mission">
                <h1>Our Mission</h1>
                <p>{about[0].mission}</p>
              </div>
              <div className="vission">
                <h1>Our Vision</h1>
                <p>{about[0].vission}</p>
              </div>
            </div>
            <div className="about_content_wrap_right">
              <h1>Who we are!!</h1>
              <div
                className="about-text"
                dangerouslySetInnerHTML={{ __html: about[0].about }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
