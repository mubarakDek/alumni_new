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
        let newData = res.data.data.filter((user) => user.year.includes(value));

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
    const [...mem] = memberdetail;
    const [m] = mem;

    if (!member) {
      return <Loader></Loader>;
    }

    return (
      <section className="members">
        <div className="members_content mx-auto p-5">
          <SectionTitle title="Search" className="mb-0" />

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
                  options={["ICT", "Engineering", "Accounting"]}
                  filterData={filterData}
                />
                <FilterSelect
                  filterData={filterData}
                  title="Degree"
                  options={["Bachelor", "Masters"]}
                />
                <FilterSelect filterData={filterData} title="Location" />
                <FilterSelect filterData={filterData} title="Other Education" />
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
