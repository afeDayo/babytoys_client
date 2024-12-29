import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", formData);

      const { token } = response.data;

      localStorage.setItem("authToken", token);

      setError("");

      alert("Login successfull");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="signin">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="in-form" action="">
        <h1 className="in-title">Register</h1>
        <div className="in-input">
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
          <button type="submit">Login to your account</button>
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
