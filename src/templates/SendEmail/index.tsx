import React from "react";
import "./SendEmail.scss";

import logo from "@logos/logo.gif";
import email from "@icons/email.svg";

const SendEmail = (): JSX.Element => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been send</h1>
        <p className="subtitle">
          Please check yout inbox for instructions on hoy to reset the password
        </p>
        <div className="email-image-container">
          <img src={email} alt="email-image" />
        </div>
        <button className="primary-button login-button button">Login</button>
        <p className="resend">
          <span>Didn't recive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export { SendEmail };
