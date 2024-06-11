import React from "react";
import "./Login.css";
import image1 from "../assets/images/Example-QR-code.webp";

const Login = () => {
  return (
    <>
      <div className="container flex">
        <div className="login-container">
          <span>Welcome back!</span>
          <p>We're so excited to see you again!</p>
          <div className="form">
            <span>
              EMAIL OR PHONE NUMBER <span>*</span>
            </span>
            <input type="text" />
            <span>
              Password <span>*</span>
            </span>
            <input type="password" />
            <a href="">Forgot your password?</a>
            <button className="Login continue">Log In</button>
            <span>
              Need an account? <a href="./Register">Register</a>
            </span>
          </div>
        </div>
        <div className="qr-container">
          <div className="qr-img">
            <img src={image1} />
          </div>
          <span>Log in with QR Code</span>
          <p>Scan this with the Discord mobile app to log in instantly.</p>
        </div>
      </div>
    </>
  );
};

export default Login;
