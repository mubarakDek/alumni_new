import React from "react";
import "../../components/changePassword/changePassStyle.scss";
import Input from "../input/Input";

function ChangePass() {
  return (
    <div class="popup popup_changePass" id="changePass">
      <div class="popup_content ">
        <a href="#navbar" class="popup_close">
          &times;
        </a>
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
  );
}

export default ChangePass;
