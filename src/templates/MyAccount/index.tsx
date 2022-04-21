import React from "react";
import "./MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Manu</p>
            <label htmlFor="last-name" className="label">
              Last Name
            </label>
            <p className="value">Gutierritoz</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">example@example.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*******</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button login-button button"
          />
        </form>
      </div>
    </div>
  );
};

export { MyAccount };
