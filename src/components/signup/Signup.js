import React, { useState } from "react";
import { navigate } from "@reach/router";
import "../signup/signupStyle.scss";
import SectionTitle from "../../components/SectionTitle";
import Input from "../input/Input";
import { Link } from "@reach/router";
import Select from "../select/Select";
import Loader from "../../components/loader";

import axios from "axios";
// api url
import { apiURL } from "../../globals";

//password encription
import { passwordEncode } from "../../helpers";

// swr library
import useSWR from "swr";

function Signup(props) {
  const { data } = useSWR(`${apiURL}/items/department`);
  const [newData, setData] = useState({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  let departments = null;

  if (data) {
    departments = data.data;
  }

  function handleInputChange(e) {
    let { name, value } = e.target;

    if (e.target.name === "password") {
      value = passwordEncode(value);
    }

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSaving(true);

    axios
      .post(`${apiURL}/items/member`, newData)
      .then(function (res) {
        if (res.status === 200) {
          navigate("/success");
        }
      })
      .catch((err) => {
        setSaving(false);
        setMessage("Please Fill all fields with correct Data");
      });
  }

  return (
    <section className="signup">
      <div className="signup_content mx-auto p-5">
        <SectionTitle title="Sign up" />
        <div className="signup_content_wrap py-5">
          <div
            className="errorMessage"
            style={{ color: "red", background: "#f0c0bc", width: "100%" }}
          >
            <h3>{message}</h3>
          </div>

          {saving ? (
            <Loader />
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form_group">
                <Input
                  label="First Name *"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required={true}
                  onChange={handleInputChange}
                  pattern="[a-zA-Z]{3,15}"
                  title="Firstname can contain only English letters a-z A-Z"
                  minLength={3}
                />
                <Input
                  label="Last Name *"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  pattern="[a-zA-Z]{3,15}"
                  title="Lastname can contain only English letters a-z A-Z"
                  minLength={3}
                />
              </div>

              <div className="form_group">
                <Input
                  label="Email *"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => handleInputChange(e)}
                  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
                  title="The domain portion of the email address is invalid "
                />
                <Input
                  label="Mobile"
                  type="text"
                  name="number"
                  placeholder="Mobile"
                  onChange={(e) => handleInputChange(e)}
                  pattern="[0-9]{3,15}"
                  title={"Mobile can contain only 0-9"}
                  minLength={7}
                />
              </div>
              <div className="form_group">
                <Select
                  name="department_id"
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
                  <option style={{ background: "#ccc" }} defaultValue="">
                    Select Degree
                  </option>

                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Masters Degree">Masters Degree</option>
                </Select>
              </div>
              <div className="form_group">
                <Input
                  label="Year *"
                  type="date"
                  name="year"
                  placeholder="Year"
                  required
                  onChange={(e) => handleInputChange(e)}
                />
                <Input
                  label="Password *"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => handleInputChange(e)}
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                  title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                />
              </div>
              <div className="form_group radio">
                <Input
                  type="radio"
                  label="Male"
                  id="male"
                  name="gender"
                  value="m"
                  className="radio"
                  onChange={(e) => handleInputChange(e)}
                />

                <Input
                  type="radio"
                  id="female"
                  label="Female"
                  name="gender"
                  value="f"
                  className="radio"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="btn ">
                <input className="btn-primary" type="submit" value="Sign up" />
              </div>
            </form>
          )}
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
