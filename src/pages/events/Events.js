import React from "react";
import "../events/eventsStyle.scss";
import Event from "../../components/Event";
import SectionTitle from "../../components/SectionTitle";
import Hero from "../../components/hero/Hero";
import { isDatePassed } from "../../helpers/index";
import Loader from "../../components/loader";
import axios from "axios";

// api url
import { apiURL } from "../../globals";

function Events() {
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState({});
  const [filterData, setFilterData] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    setLoading(true);
    axios
      .get(`${apiURL}/items/event`)
      .then((res) => {
        setData(res.data);
        setFilterData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  function searchEvents(e) {
    let newData = filterData.data.filter((post) =>
      post.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    //console.log(newData);
    setData({ data: newData });
  }

  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div
        className="error_reload_page"
        style={{ height: "70vh", textAlign: "center" }}
      >
        <h3>
          something went wrong, <br /> please reload the page
        </h3>
      </div>
    );
  }

  if (data) {
    const { data: event } = data;

    return (
      <section className="events">
        <Hero title="Events" />
        <div className="events_completed_search m-5 px-5">
          <input
            onKeyUp={(e) => searchEvents(e)}
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-2"
            value={searchValue}
            type="text"
            placeholder="Search"
          />
          {/* <select className="py-2 px-md-4">
              <option value="Select year">Select year</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select> */}
        </div>

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
        </div>

        {/* Completed Events*/}
        <div className="events_completed mt-5 p-5">
          <SectionTitle title="completed events" />

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
        </div>
      </section>
    );
  }

  return null;
}

export default Events;
