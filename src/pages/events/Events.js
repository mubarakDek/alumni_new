import React from "react";
import "../events/eventsStyle.scss";
import Event from "../../components/Event";
import SectionTitle from "../../components/SectionTitle";
import Hero from "../../components/hero/Hero";
import { isDatePassed } from "../../helpers/index";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Events() {
  const { data, error } = useSWR(`${apiURL}/items/event`);

  if (error) {
    return (
      <div style={{ height: "40vh", textAlign: "center" }}>
        <h3>something wenet wrong, please reload page</h3>;
      </div>
    );
  }

  if (data) {
    const { data: event } = data;

    return (
      <section className="events">
        <Hero title="Events" />

        {/* Upcoming Events */}
        <div className="events_upcoming mx-auto mt-5 p-5">
          <SectionTitle title="upcoming events" />
          <div className="events_upcoming_list">
            {event
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
          <button className="btn-primary mx-auto mt-4" type="button">
            Load More
          </button>
        </div>

        {/* Completed Events*/}
        <div className="events_completed mt-5 p-5">
          <SectionTitle title="completed events" />
          <div className="events_completed_search mb-5 px-5">
            <input className="p-2" type="text" placeholder="Search" />
            <select className="py-2 px-md-4">
              <option value="Select year">Select year</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
          <div className="events_completed_list">
            {event
              .filter((e) => isDatePassed(e.date))
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
          <button className="btn-primary mx-auto mt-4" type="button">
            Load More
          </button>
        </div>
      </section>
    );
  }

  return null;
}

export default Events;
