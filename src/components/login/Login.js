import React, { useState } from "react";
import { navigate } from "@reach/router";

import { Link } from "@reach/router";
import "../login/loginStyle.scss";
import SectionTitle from "../SectionTitle";
import Input from "../input/Input";
import axios from "axios";
// api url
import { apiURL } from "../../globals";

function Login() {
  const [user, setUser] = useState({});

  function handleInputChange(e) {
    // console.log(e.persist());
    let { name, value } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(user);

    axios
      .post(`${apiURL}/auth/authenticate`, user)
      .then(function (res) {
        console.log(res);
        if (res.status === 200) {
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="login">
      <div className="content mx-auto p-5">
        <SectionTitle title="Login" />

        <div className="content_wrap">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                name="password"
                type="password"
                placeholder="*************"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form_options my-2">
              <div className="checkbox my-2">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remeber Me</label>
              </div>
              <Link to="/about">Forgot Password?</Link>
            </div>
            <div className="btn">
              <button className="btn-primary ml-auto px-4 mt-2">Login</button>
            </div>
          </form>

          <div className="login_with my-5">
            <div className="title mb-2">
              <div className="line"></div>
              <p>Or Login with</p>
              <div className="line"></div>
            </div>
            <div className="social_links">
              <span className="fontawesome-twitter mr-3"></span>
              <span className="fontawesome-facebook"></span>
            </div>
          </div>

          <div className="create_account">
            <p>
              New User? <Link to="/signup">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
