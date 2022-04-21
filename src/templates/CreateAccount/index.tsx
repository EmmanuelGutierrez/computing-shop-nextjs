import React from "react";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Manu"
              className="input input-name"
            />
            <label htmlFor="last-name" className="label">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id="last-name"
              placeholder="Gutierritoz"
              className="input input-last-name"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="example@example.com"
              className="input input-email"
            />
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
          </div>
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

export default CreateAccount;
