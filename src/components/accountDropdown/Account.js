import React, { useState } from "react";
import { Link } from "@reach/router";
import "../../components/accountDropdown/accountStyle.scss";

function AccountDropdown() {
  const [active, setActive] = useState(true);

  function handleToggle(e) {
    setActive(!active);
  }
  return (
    <div className="account">
      <div onClick={handleToggle} className="img_container">
        <img src="../../images/building.jpg" alt="user profile" />
      </div>
      <div className={active ? "account_content active" : "account_content"}>
        <Link to="/changepass">Change Password</Link>
        <Link to="/">Account Settings</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default AccountDropdown;
