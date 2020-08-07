import React from "react";
import "../singleNews/singleNewsStyle.scss";
import Hero from "../../components/hero/Hero";
import { Link } from "@reach/router";
function SingleNews() {
  return (
    <section className="singleNews">
      <Hero title="News Page" />
      <div className="singleNews_content mx-auto p-5">
        <div className="posted_on">
          <p>
            Posted on <span>25 May, 2020</span>
          </p>
          <Link to="/news" className="btn-primary">
            Back to News
          </Link>
        </div>

        <div className="singleNews_content_wrap">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            magnam!
          </h1>
          <div className="img_container">
            <img src="../../images/building.jpg" alt="aboutImage" />
          </div>
          <div className="paragraph">
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

export default SingleNews;
