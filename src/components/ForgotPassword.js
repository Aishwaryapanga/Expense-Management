import React from "react";
import "./Auth.css";

function ForgotPassword({ onSwitchToLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button onClick={onSwitchToLogin}>Login</button>
        <button disabled className="active-tab">
          Forgot Password
        </button>
      </div>
      <h2 className="auth-title">Forgot Password</h2>
      <form className="auth-form">
        <input type="email" placeholder="Enter your registered email" />
        <button type="submit" className="auth-submit">
          Reset Password
        </button>
      </form>
      <p>
        Remember your password?{" "}
        <span className="auth-link" onClick={onSwitchToLogin}>
          Login now
        </span>
      </p>
    </div>
  );
}

export default ForgotPassword;
