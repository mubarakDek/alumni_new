import React, { useState, useContext } from "react";
import { Link, navigate } from "@reach/router";
import "../../components/accountDropdown/accountStyle.scss";
import Input from "../input/Input";
import { UserContext } from "../../context/userContext";

function AccountDropdown() {
  const { dispatch } = useContext(UserContext);

  const [active, setActive] = useState(true);
  const [popup, setPopup] = useState(true);

  function handleToggle(e) {
    setActive(!active);
  }

  function handlePopup() {
    setPopup(!popup);
  }
  return (
    <section>
      <div className="account">
        <div onClick={handleToggle} className="img_container">
          <img src="../../images/building.jpg" alt="user profile" />
        </div>
        <div className={active ? "account_content active" : "account_content"}>
          <Link to="/" onClick={handlePopup}>
            Change Password
          </Link>
          <Link to="/profile">Account Settings</Link>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </div>
      </div>

      <div
        className={
          popup ? "popup popup_changePass active" : "popup popup_changePass "
        }
      >
        <div className="popup_content ">
          <p onClick={() => setPopup(!popup)} className="popup_close">
            &times;
          </p>
          <h3>Change Password</h3>
          <form action="">
            <div className="form-group">
              <Input type="password" placeholder="Old Password" />
            </div>
            <div className="form-group">
              <Input type="password" placeholder="New Password" />
            </div>
            <div className="form-group">
              <Input type="password" placeholder="Confirm Password" />
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
