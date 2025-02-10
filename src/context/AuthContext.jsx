// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

// Create the context
const AuthContext = createContext();

// Provider component that wraps your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores the user object (or token)
  const [loading, setLoading] = useState(true);

  // On initial load, retrieve the token from localStorage (if available)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // In a real-world app you might decode the token or fetch user details.
      setUser({ token });
    }
    setLoading(false);
  }, []);

  // Login function that calls the server and stores the token
  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      const { token, user: userData } = response.data;
      localStorage.setItem("authToken", token);
      // Store the returned user data or just the token
      setUser(userData || { token });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Register function (optional)
  const register = async (registrationData) => {
    try {
      const response = await axios.post("/api/auth/signup", registrationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Logout function clears the token and user state
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access authentication data in any component
export const useAuth = () => useContext(AuthContext);
