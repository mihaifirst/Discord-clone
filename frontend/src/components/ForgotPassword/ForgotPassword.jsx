import React from "react";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  return (
    <>
      <div className="container flex">
        <div className="login-container">
          <span>Forgot your Password?</span>
          <p>Please enter your Email or Phone number below</p>
          <div className="form">
            <span>
              EMAIL OR PHONE NUMBER <span>*</span>
            </span>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
