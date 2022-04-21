import React from "react";
import "./NewPassword.scss";

import logo from "@logos/logo.gif";

const NewPassword = (): JSX.Element => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for you account</p>
        <form action="" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="*******"
            className="input input-password"
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            name=""
            id="new-password"
            placeholder="*******"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Confirm"
            className="primary-button login-button button"
          />
        </form>
      </div>
    </div>
  );
};

export { NewPassword };
