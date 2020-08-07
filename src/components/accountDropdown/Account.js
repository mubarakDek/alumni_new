import React, { useState } from "react";
import { Link } from "@reach/router";
import "../../components/accountDropdown/accountStyle.scss";
import Input from "../input/Input";

function AccountDropdown() {
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
          <Link to="/login">Logout</Link>
        </div>
      </div>

      <div
        class={
          popup ? "popup popup_changePass active" : "popup popup_changePass "
        }
      >
        <div class="popup_content ">
          <p onClick={() => setPopup(!popup)} class="popup_close">
            &times;
          </p>
          <h3>Change Password</h3>
          <form action="">
            <div class="form-group">
              <Input type="password" placeholder="Old Password" />
            </div>
            <div class="form-group">
              <Input type="password" placeholder="New Password" />
            </div>
            <div class="form-group">
              <Input type="password" placeholder="Confirm Password" />
            </div>

            <input
              type="submit"
              id=""
              class="btn-primary"
              value="Change Password"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default AccountDropdown;
