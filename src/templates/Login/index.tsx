import React, { FormEvent, useRef } from "react";
import "./Login.scss";

import logo from "@logos/logo.gif";

const Login = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const data = {
        username: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(data);
    }
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="" className="form" ref={form}>
          <h1 className="title">Welcome</h1>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export { Login };
