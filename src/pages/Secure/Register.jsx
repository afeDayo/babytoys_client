import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "../../api/axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", formData);

      setSuccess("Registration successfull Please log in.");

      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="signup">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit} className="up-form" action="">
        <h1 className="up-title">Register</h1>
        <div className="up-input">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Create an account</button>
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
