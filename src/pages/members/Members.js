import React from "react";
import "../members/membersStyle.scss";
import Member from "../../components/member/Member";
import SectionTitle from "../../components/SectionTitle";
import Select from "../../components/select/Select";

function Members() {
  return (
    <section className="members">
      <div className="members_content mx-auto p-5">
        <SectionTitle title="Search" className="mb-0" />

        <div className="members_content_main">
          <div className="members_content_main_left">
            <h1 className="px-3 py-2">Filters</h1>
            <div className="filters">
              <Select title="Class" />
              <Select title="Faculty" />
              <Select title="Degree" />
              <Select title="Location" />
              <Select title="Other Education" />
            </div>
          </div>
          <div className="members_content_main_right px-4 pt-4">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
