import React from "react";
import "./Auth.css";

function Login({ onSwitchToRegister, onForgotPassword }) {
  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button className="active-tab">Login</button>
        <button onClick={onSwitchToRegister}>Signup</button>
      </div>
      <h2 className="auth-title">Login Form</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <div className="forgot-password">
          {/* Switch to Forgot Password Page */}
          <button type="button" className="link-button" onClick={onForgotPassword}>
            Forgot password?
          </button>
        </div>
        <button type="submit" className="auth-submit">
          Login
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="auth-link" onClick={onSwitchToRegister}>
          Signup now
        </span>
      </p>
    </div>
  );
}

export default Login;
