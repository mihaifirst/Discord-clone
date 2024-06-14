import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="container">
        <span>Create an account</span>
        <div className="form">
          <span>
            EMAIL <span>*</span>
          </span>
          <input type="text" />
          <span>DISPLAY NAME</span>
          <input type="text" />
          <span>
            USERNAME <span>*</span>
          </span>
          <input type="text" />
          <span>
            PASSWORD <span>*</span>
          </span>
          <input type="password" />
          <span>
            DATE OF BIRTH <span>*</span>
          </span>
          <div className="birth">
            <select name="day">
              <option value="Monday">Day</option>
            </select>
            <select name="month">
              <option value="January">Month</option>
            </select>
            <select name="Year">
              <option value="volvo">Year</option>
            </select>
          </div>
          <div className="optional">
            <input type="checkbox" />
            <label>
              (Optional) It's okay to send me emails with Discord updates, tips
              and special offers. You can opt out at any time
            </label>
          </div>
          <button className="continue">Continue</button>
          <div className="optional ">
            <input type="checkbox" />
            <label>
              <p className="white">
                I have read and agree to Discord's{" "}
                <a href="https://discord.com/terms" target="_blank">
                  Terms of Service
                </a>
                {"   "}
                and{" "}
                <a href="https://discord.com/privacy" target="_blank">
                  Privacy Policy
                </a>
                .
              </p>
            </label>
          </div>
          <a className="account" href="">
            Already have an account?
          </a>
        </div>
      </div>
    </>
  );
};

export default Register;
