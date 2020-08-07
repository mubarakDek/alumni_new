import React from "react";
import "../profile/profileStyle.scss";
import Hero from "../../components/hero/Hero";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
function Profile() {
  return (
    <section className="profile">
      <Hero title="User Profile" />
      <div className="profile_content mx-auto p-5">
        <div className="profile_content_left p-3 ">
          <figure className="mx-auto">
            <img src="../../images/building.jpg" alt="" />
          </figure>
          <div className="short_bio">
            <label htmlFor="">Short BIO</label>
            <textarea rows="5" placeholder="Descripe who you are" />
          </div>
        </div>
        <div className="profile_content_right">
          <form className="form ">
            {/* === PERSONAL DETAILS === */}
            <div className="form_personal_details  p-5 ">
              <div className="form_group">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <Input label="Last Name" type="text" placeholder="Last Name" />
              </div>
              <div className="form_group">
                <Input label="Nick Name" type="text" placeholder="Nick Name" />
                <Input
                  label="Email Address"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="form_group">
                <Input label="Location" type="text" placeholder="Location" />
                <Input label="Mobile" type="text" placeholder="Mobile" />
              </div>
            </div>

            {/* === EDUCATION === */}
            <div className="form_education  p-5  mt-4">
              <div className="form_group">
                <Input
                  label="Department"
                  type="text"
                  placeholder="Department"
                />
                <div className="small_div">
                  <Select label="Degree">
                    <option value="">Bachelor Degree</option>
                    <option value="">Masters Degree</option>
                  </Select>
                  <Select label="Graduation Year">
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                  </Select>
                </div>
              </div>
            </div>

            {/* === EXPERIENCE === */}
            <div className="form_experience  p-5 mt-4">
              <div className="form_group">
                <Input label="Employer" type="text" placeholder="Employer" />
                <div className="small_div">
                  <Input label="From" type="text" placeholder="2019" />
                  <Input label="To" type="text" placeholder="2020" />
                </div>
              </div>
              <div className="form_group">
                <Input label="Title" type="text" placeholder="Title" />
                <Input
                  label="Job Domain"
                  type="text"
                  placeholder="Job Domain"
                />
              </div>
            </div>
            <div className="btn">
              <button className="btn-primary ml-auto mt-4 px-5" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
