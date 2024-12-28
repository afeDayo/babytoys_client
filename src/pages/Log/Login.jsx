import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signin">
      <form className="in-form" action="">
        <h1 className="in-title">Register</h1>
        <div className="in-input">
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <button>Login to your account</button>
        </div>

        <div className="dont">
          <p className="mb-0">Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
