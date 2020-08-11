import React from "react";
import { Link } from "@reach/router";
import "../login/loginStyle.scss";
import SectionTitle from "../SectionTitle";


function Login() {
  return (
    <section className="login">
      <div className="content mx-auto p-5">
        <SectionTitle title="Registration Status" />

        <div className="content_wrap">
          <div className="login_with my-5">
            <div className="title mb-2">
              <div className="line"></div>
              <p className="" style={{ color: "green" }}>
                Successfully Registered
              </p>
              <div className="line"></div>
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
