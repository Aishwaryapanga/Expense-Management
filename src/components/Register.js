import React from "react";
import "./Auth.css";

function Register({ onSwitchToLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button onClick={onSwitchToLogin}>Login</button>
        <button className="active-tab">Signup</button>
      </div>
      <h2 className="auth-title">Signup Form</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button type="submit" className="auth-submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register;
