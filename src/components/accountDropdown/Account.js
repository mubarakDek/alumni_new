import React, { useState, useEffect, useContext } from "react";
import { Link, navigate } from "@reach/router";
import "../../components/accountDropdown/accountStyle.scss";
import Input from "../input/Input";
import { UserContext } from "../../context/userContext";

import axios from "axios";
// api url
import { apiURL } from "../../globals";

function AccountDropdown() {
  const { dispatch } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordData, setPasswordData] = useState({});
  const [active, setActive] = useState(true);
  const [popup, setPopup] = useState(true);

  let memberId = JSON.parse(sessionStorage.getItem("userData")).id || null;

  useEffect(() => {
    if (!memberId) return;

    axios
      .get(`${apiURL}/items/member/${memberId}`)
      .then((res) => {
        setOldPassword(res.data.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [memberId]);

  function handleToggle(e) {
    setActive(!active);
  }

  function handlePopup() {
    setPopup(!popup);
  }

  function handleInputChange(e) {
    // console.log(e.persist());
    let { name, value } = e.target;

    setPasswordData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (oldPassword !== passwordData.old_password) {
      setMessage("Old password is incorrect");
      return;
    }

    if (passwordData.new_password !== passwordData.confirm_password) {
      setMessage("password does not match");
      return;
    }

    if (passwordData.new_password.length < 5) {
      setMessage("Password should be more than 5 characters");
      return;
    }

    // change password if all condition passed.

    axios
      .patch(`${apiURL}/items/member/${memberId}`, {
        password: passwordData.new_password,
      })
      .then((res) => {
        setMessage("Successfully changed Password.");

        setTimeout(() => {
          dispatch({
            type: "LOGOUT",
          });
        }, 3000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <div className="account">
        <div onClick={handleToggle} className="img_container">
          <img src="../../images/building.jpg" alt="user profile" />
        </div>{" "}
        <div className={active ? "account_content active" : "account_content"}>
          <Link to="/" onClick={handlePopup}>
            Change Password{" "}
          </Link>{" "}
          <Link to="/profile"> Account Settings </Link>{" "}
          <button
            onClick={() =>
              dispatch({
                type: "LOGOUT",
              })
            }
          >
            {" "}
            Logout{" "}
          </button>{" "}
        </div>{" "}
      </div>
      <div
        className={
          popup ? "popup popup_changePass active" : "popup popup_changePass "
        }
      >
        <div className="popup_content ">
          <p onClick={() => setPopup(!popup)} className="popup_close">
            &times;
          </p>{" "}
          <h3 style={{ color: "red" }}>{message}</h3>
          <h3> Change Password </h3>{" "}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                type="password"
                name="old_password"
                onChange={(e) => handleInputChange(e)}
                placeholder="Old Password"
              />
            </div>{" "}
            <div className="form-group">
              <Input
                type="password"
                name="new_password"
                onChange={(e) => handleInputChange(e)}
                placeholder="New Password"
              />
            </div>{" "}
            <div className="form-group">
              <Input
                type="password"
                name="confirm_password"
                onChange={(e) => handleInputChange(e)}
                placeholder="Confirm Password"
              />
            </div>
            <input
              type="submit"
              id=""
              className="btn-primary"
              value="Change Password"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default AccountDropdown;
