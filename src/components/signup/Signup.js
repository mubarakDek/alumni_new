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
import { passwordEncode, passwordDecode } from "../../helpers";

// swr library
import useSWR from "swr";

function Signup(props) {
  let en = passwordEncode("123456");
  let de = passwordDecode(en);
  console.log(en);
  console.log(de);
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

    console.log(name, value);
    // console.log(e.persist());
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
        console.log(newData);
        setSaving(false);
        setMessage("Please Fill all fields with correct Data");
      });
  }

  return (
    <section className="signup">
      <div className="signup_content mx-auto p-5">
        <SectionTitle title="Sign up" />
        <div className="signup_content_wrap py-5">
          <div style={{ color: "red", background: "#f0c0bc", width: "100%" }}>
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
                />
                <Input
                  label="Last Name"
                  type="text"
                  name="lastname"
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
                  name="number"
                  placeholder="Mobile"
                  onChange={(e) => handleInputChange(e)}
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
                  label="Year"
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
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="form_group">
                <Input
                  type="radio"
                  label="Male"
                  id="male"
                  name="gender"
                  value="m"
                  onChange={(e) => handleInputChange(e)}
                />

                <Input
                  type="radio"
                  id="female"
                  label="Female"
                  name="gender"
                  value="f"
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
