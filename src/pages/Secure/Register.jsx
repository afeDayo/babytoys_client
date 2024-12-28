import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="signup">
      <form className="up-form" action="">
        <h1 className="up-title">Register</h1>
        <div className="up-input">
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Repeat Password" />
          <button>Create an account</button>
        </div>

        <div className="already">
          <p className="mb-0">Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
