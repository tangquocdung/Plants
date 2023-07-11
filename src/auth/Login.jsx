import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="wrapper-auth-form">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address..."
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter your password..."
            id="password"
            name="password"
          />
          <button className="auth" type="submit">Log In</button>
        </form>
        <Link to="/register" className="link-btn">Don't have an account? Register here.</Link>
      </div>
    </div>
  );
};
