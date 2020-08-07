import React from "react";
import { Timeline } from "react-twitter-widgets";
import HomeHero from "../components/HomeHero";
import News from "../components/News";
import Event from "../components/Event";
import GoogleMap from "../components/GoogleMap";
import SectionTitle from "../components/SectionTitle";
import { Link } from "@reach/router";

function Home() {
  return (
    <div className="container">
      <HomeHero />

      <section className="main_content">
        {/* ==== NEWS SECTION ===== */}
        <div className="main_content_news">
          <h1 className="main_content_title">Alumni News</h1>
          <News />
          <News />
        </div>

        {/* ==== TWEETS SECTION ===== */}
        <div className="main_content_tweets">
          <h2 className="main_content_title">Social Media</h2>
          <div className="tweet tweet_twitter">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "AdmasUniversit1",
              }}
              options={{
                height: "400",
              }}
            />
          </div>
          <div className="tweet tweet_facebook">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "AdmasUniversit1",
              }}
              options={{
                height: "400",
              }}
            />
            {/* <FacebookProvider appId="868100766567482">
              <Page href="https://www.facebook.com" tabs="timeline" />
            </FacebookProvider> */}
          </div>
        </div>
      </section>

      <section className="upcoming_events mx-auto p-5">
        <SectionTitle title="Upcoming events" />
        <div className="upcoming_events_list">
          <Event />
          <Event />
          <Event />
        </div>
        <Link to="/events" className="btn-primary mx-auto">
          Load More
        </Link>
      </section>

      <section className="google_map">
        <GoogleMap />
      </section>
    </div>
  );
}

export default Home;
