import React from "react";
import "../members/membersStyle.scss";
import Member from "../../components/member/Member";
import SectionTitle from "../../components/SectionTitle";
import FilterSelect from "../../components/filterSelect/FilterSelect";
import Loader from "../../components/loader";
import axios from "axios";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Members() {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // const { data, error, mutate } = useSWR(`${apiURL}/items/member`);
  const { data: detail } = useSWR(`${apiURL}/items/memberdetail`);

  React.useEffect(function () {
    axios
      .get(`${apiURL}/items/member`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div
        className="error_reload_page"
        style={{ height: "70vh", textAlign: "center" }}
      >
        <h3>
          something went wrong, <br /> please reload page
        </h3>
      </div>
    );
  }

  function filterData(value) {
    setLoading(true);
    axios
      .get(`${apiURL}/items/member`)
      .then((res) => {
        let newData;

        let [...newArray] = res.data.data;

        newArray.forEach((e) => {
          if (e.year.includes(value)) {
            newData = newArray.filter((user) => user.year.includes(value));
          }

          if (e.degree.includes(value)) {
            newData = newArray.filter((user) => user.degree.includes(value));
          }

          let data;
          if (value === "ICT") data = 1;
          if (value === "DS") data = 2;
          if (value === "SW") data = 3;
          if (value === "HRM") data = 4;
          if (value === "Arch") data = 5;
          if (value === "PH") data = 6;
          if (data) {
            newData = newArray.filter((user) => user.department_id === data);
          }
        });

        setData({ data: newData });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }

  if (loading) {
    return <Loader></Loader>;
  }

  if (data && detail) {
    const { data: member } = data;
    const { data: memberdetail } = detail;

    if (!member) {
      return <Loader></Loader>;
    }

    return (
      <section className="members">
        <div className="members_content mx-auto p-5">
          <SectionTitle title="Alumni Members" className="mb-0" />

          <div className="members_content_main">
            <div className="members_content_main_left">
              <h1 className="px-3 py-2">Filters</h1>
              <div className="filters">
                <FilterSelect
                  filterData={filterData}
                  title="Class"
                  options={[
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                  ]}
                />
                <FilterSelect
                  title="Faculty"
                  options={["ICT", "DS", "SW", "HRM", "Arch", "PH"]}
                  filterData={filterData}
                />
                <FilterSelect
                  filterData={filterData}
                  title="Degree"
                  options={["Bachelor", "Masters"]}
                />
              </div>
            </div>
            <div className="members_content_main_right px-4 pt-4">
              {member.map((post) => {
                let imgId = 17;
                {
                  /* find member photo */
                }
                memberdetail.forEach((detail) => {
                  if (detail.memberid === post.id) {
                    imgId = detail.photo;
                  }
                });

                return (
                  <div key={post.id}>
                    <Member
                      memId={post.id}
                      fname={post.firstname}
                      lname={post.lastname}
                      imgId={imgId}
                      degree={post.degree}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default Members;
