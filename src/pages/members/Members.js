import React from "react";
import "../members/membersStyle.scss";
import Member from "../../components/member/Member";
import SectionTitle from "../../components/SectionTitle";
import FilterSelect from "../../components/filterSelect/FilterSelect";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Members() {
  const { data, error } = useSWR(`${apiURL}/items/member`);

  if (error) {
    return (
      <div style={{ height: "40vh", textAlign: "center" }}>
        <h3>something went wrong, please reload the page</h3>;
      </div>
    );
  }

  if (data) {
    const { data: member } = data;
    console.log(member);

    return (
      <section className="members">
        <div className="members_content mx-auto p-5">
          <SectionTitle title="Search" className="mb-0" />

          <div className="members_content_main">
            <div className="members_content_main_left">
              <h1 className="px-3 py-2">Filters</h1>
              <div className="filters">
                <FilterSelect title="Class" />
                <FilterSelect title="Faculty" />
                <FilterSelect title="Degree" />
                <FilterSelect title="Location" />
                <FilterSelect title="Other Education" />
              </div>
            </div>
            <div className="members_content_main_right px-4 pt-4">
              {member.map((post) => {
                return (
                  <div key={post.id}>
                    <Member
                      fname={post.firstname}
                      lname={post.lastname}
                      imgId={post.photo || ""}
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
