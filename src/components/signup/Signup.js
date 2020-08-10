import React, { useState } from "react";
import "../signup/signupStyle.scss";
import SectionTitle from "../../components/SectionTitle";
import Input from "../input/Input";
import { Link } from "@reach/router";
import Select from "../select/Select";
// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Signup() {
  const { data } = useSWR(`${apiURL}/items/department`);
  const [newData, setData] = useState({});

  let departments = null;

  if (data) {
    departments = data.data;
  }

  function handleInputChange(e) {
    // console.log(e.persist());
    let { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newData);
  }

  return (
    <section className="signup">
      <div className="signup_content mx-auto p-5">
        <SectionTitle title="Sign up" />
        <div className="signup_content_wrap py-5">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="First Name *"
                type="text"
                name="first_name"
                placeholder="First Name"
                required={true}
                onChange={handleInputChange}
              />
              <Input
                label="Last Name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required={true}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form_group">
              <Input
                label="Email *"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                label="Mobile"
                type="text"
                name="mobile"
                placeholder="Mobile"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form_group">
              <Select
                name="department"
                label="Department *"
                onChange={(e) => handleInputChange(e)}
              >
                {departments &&
                  departments.map((dep) => (
                    <option key={dep.id} value={dep.id}>
                      {dep.name}
                    </option>
                  ))}
              </Select>
              <Select
                label="Degree *"
                name="degree"
                onChange={(e) => handleInputChange(e)}
              >
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
                onChange={(e) => handleInputChange(e)}
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
