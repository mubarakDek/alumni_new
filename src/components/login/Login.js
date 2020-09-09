import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";

import { Link } from "@reach/router";
import "../login/loginStyle.scss";
import SectionTitle from "../SectionTitle";
import Input from "../input/Input";
import axios from "axios";
// api url
import { apiURL } from "../../globals";

//password decrption
import { passwordDecode } from "../../helpers";

//context

import { UserContext } from "../../context/userContext";

function Login() {
  const { dispatch } = useContext(UserContext);
  const [message, setMessage] = useState("");
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

    axios
      .get(`${apiURL}/items/member`)
      .then(function (res) {
        for (let obj of res.data.data) {
          // check if email exists in database
          passwordDecode(obj.password);

          if (user.email === obj.email) {
            if (obj.status === false) {
              setMessage("Your Account is not active");
              break;
            }

            if (passwordDecode(obj.password) === user.password) {
              dispatch({ type: "LOGIN", payload: obj });
              navigate("/");
              break;
            } else {
              setMessage("Invalid Credentials");
            }
          } else {
            setMessage("Invalid Credentials!!");
          }
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
          <h3 style={{ color: "red" }}>{message}</h3>
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
            </div>
            <div className="btn">
              <button className="btn-primary ml-auto px-4 mt-2">Login</button>
            </div>
          </form>

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
