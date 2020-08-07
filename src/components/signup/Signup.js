import React from "react";
import "../signup/signupStyle.scss";
import SectionTitle from "../../components/SectionTitle";
import Input from "../input/Input";
import { Link } from "@reach/router";
import Select from "../select/Select";

function Signup() {
  return (
    <section className="signup">
      <div className="signup_content mx-auto p-5">
        <SectionTitle title="Sign up" />
        <div className="signup_content_wrap py-5">
          <form className="form">
            <div className="form_group">
              <Input
                label="First Name *"
                type="text"
                name="first_name"
                placeholder="First Name"
              />
              <Input
                label="Last Name"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div className="form_group">
              <Input
                label="Email *"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Input
                label="Mobile"
                type="text"
                name="mobile"
                placeholder="Mobile"
              />
            </div>
            <div className="form_group">
              <Select label="Department *">
                <option value="">Informatics</option>
                <option value="">Economicies</option>
                <option value="">Engineering</option>
              </Select>
              <Select label="Degree *">
                <option value="">Bachelor Degree</option>
                <option value="">Masters Degree</option>
              </Select>
            </div>
            <div className="form_group">
              <Input label="Year" type="text" name="year" placeholder="Year" />
              <Input
                label="Password *"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="btn ">
              <input className="btn-primary" type="submit" value="Sign up" />
            </div>
          </form>
          <div className="registered_login px-4 py-2 mt-5">
            <p>
              Already registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
