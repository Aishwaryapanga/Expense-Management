import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function App() {
  const [page, setPage] = useState("login"); // Manages current page

  const renderPage = () => {
    if (page === "login") {
      return <Login onSwitchToRegister={() => setPage("register")} onForgotPassword={() => setPage("forgotPassword")} />;
    } else if (page === "register") {
      return <Register onSwitchToLogin={() => setPage("login")} />;
    } else if (page === "forgotPassword") {
      return <ForgotPassword onSwitchToLogin={() => setPage("login")} />;
    }
  };

  return (
    <div className="app">
      <header style={{ backgroundColor: "#3137b5", padding: "20px", color: "white", textAlign: "center" }}>
        <h1>Expense Management System</h1>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
