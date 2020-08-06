import React from "react";
import "../events/eventsStyle.scss";
import Event from "../../components/Event";
import SectionTitle from "../../components/SectionTitle";
import Hero from "../../components/hero/Hero";

function Events() {
  return (
    <section className="events">
      <Hero title="Events" />

      {/* Upcoming Events */}
      <div className="events_upcoming mx-auto mt-5 p-5">
        <SectionTitle title="upcoming events" />
        <div className="events_upcoming_list">
          <Event />
          <Event />
          <Event />
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
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
        <button className="btn-primary mx-auto mt-4" type="button">
          Load More
        </button>
      </div>
    </section>
  );
}

export default Events;
