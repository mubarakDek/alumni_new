import React from "react";
import { Link } from "@reach/router";

function HomeHero() {
  return (
    <section className="home_hero">
      <div className="home_hero_content">
        <h1>Welcome to</h1>
        <h3>Admas University Alumni</h3>
        <Link to="/about" className="btn-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
