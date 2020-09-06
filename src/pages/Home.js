import React from "react";
import { Timeline } from "react-twitter-widgets";
import HomeHero from "../components/HomeHero";
import News from "../components/News";
import Event from "../components/Event";
import GoogleMap from "../components/GoogleMap";
import SectionTitle from "../components/SectionTitle";
import { Link } from "@reach/router";
import { isDatePassed } from "../helpers/index";

// api url
import { apiURL } from "../globals";

// swr library
import useSWR from "swr";

function Home() {
  const { data, error } = useSWR(`${apiURL}/items/news`);
  const { data: eventData } = useSWR(`${apiURL}/items/event`);

  if (error) {
    return (
      <div style={{ height: "40vh", textAlign: "center" }}>
        <h3>something went wrong, please reload the page</h3>;
      </div>
    );
  }

  if (data && eventData) {
    const { data: news } = data;
    const { data: events } = eventData;

    return (
      <div className="container">
        <HomeHero />

        <section className="main_content">
          {/* ==== NEWS SECTION ===== */}
          <div className="main_content_news">
            <h1 className="main_content_title">Alumni News</h1>
            {news.map((post) => {
              return (
                <div key={post.id}>
                  <News
                    title={post.title}
                    createOn={post.created_on}
                    imgId={post.photo}
                    newsId={post.id}
                  />
                </div>
              );
            })}
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
            {events
              .filter((e) => !isDatePassed(e.date))
              .map((post) => {
                return (
                  <div key={post.id} className="events_upcoming_list_item">
                    <Event
                      title={post.description}
                      createOn={post.created_on}
                      eventId={post.id}
                      date={post.date}
                      imgId={post.banner}
                    />
                  </div>
                );
              })}
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

  return null;
}

export default Home;
