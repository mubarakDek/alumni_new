import React from "react";
import "../about/aboutStyle.scss";
import Hero from "../../components/hero/Hero";
import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <section className="about">
      <Hero title="About Us" />
      <div className="about_content mx-auto p-5">
        <SectionTitle title="About Us" />
        <div className="about_content_wrap">
          <div className="about_content_wrap_left">
            <div className="img_container">
              <img src="../../images/building.jpg" alt="aboutImage" />
            </div>
            <div className="mission">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, sapiente! Alias, qui atque cupiditate maxime, nisi
                enim fugiat minus quis natus ullam distinctio nostrum molestiae
                esse ipsum facilis commodi praesentium.
              </p>
            </div>
            <div className="vission">
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                quae cumque, impedit molestiae illum soluta inventore dolorum
                exercitationem molestias quisquam.
              </p>
            </div>
          </div>
          <div className="about_content_wrap_right">
            <h1>Who we are!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tempore sint ratione saepe nemo repellat aut ea
              dolores. Totam distinctio nihil quasi minus rem atque quas, quo
              quaerat voluptatibus reprehenderit nobis beatae dignissimos fugiat
              voluptatum, asperiores officiis? Dolorem, vitae
              delectus?Praesentium tempore sint ratione saepe nemo repellat aut
              ea dolores. Totam distinctio nihil quasi minus rem atque quas, quo
              quaerat voluptatibus reprehenderit nobis beatae dignissimos fugiat
              voluptatum, asperiores officiis? Dolorem, vitae delectus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tempore sint ratione saepe nemo repellat aut ea
              dolores. Totam distinctio nihil quasi minus rem atque quas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tempore sint ratione saepe nemo repellat aut ea
              dolores. Totam distinctio nihil quasi minus rem atque quas, quo
              quaerat voluptatibus reprehenderit nobis beatae dignissimos fugiat
              voluptatum, asperiores officiis? Dolorem, vitae delectus? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              iusto, tempore distinctio architecto aperiam autem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tempore sint ratione saepe nemo repellat aut ea
              dolores. Totam distinctio nihil quasi minus rem atque quas, quo
              quaerat voluptatibus reprehenderit nobis beatae dignissimos fugiat
              voluptatum, asperiores officiis? Dolorem, vitae
              delectus?Praesentium tempore sint ratione saepe nemo repellat aut
              ea dolores. Totam distinctio nihil quasi minus rem atque quas, quo
              quaerat voluptatibus reprehenderit nobis beatae dignissimos fugiat
              voluptatum, asperiores officiis? Dolorem, vitae delectus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tempore sint ratione saepe nemo repellat aut ea
              dolores. Totam distinctio nihil quasi minus rem atque quas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
