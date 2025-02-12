// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

// We'll use dynamic import for jwt-decode as before.
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper function to decode the token using jwt-decode dynamically.
  const decodeToken = async (token) => {
    try {
      const mod = await import("jwt-decode");
      const jwtDecode = mod.default || mod;
      return jwtDecode(token);
    } catch (err) {
      console.error("Error importing jwt-decode:", err);
      return null;
    }
  };

  // On initial load, try to get the token and decode it.
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      decodeToken(token).then((decoded) => {
        if (decoded) {
          // Set the user with a consistent 'id' property.
          setUser({ token, id: decoded.id });
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      const { token, user: userData } = response.data;
      localStorage.setItem("authToken", token);

      // If the server returns a user object with _id, map it to id.
      if (userData && userData._id) {
        setUser({ ...userData, id: userData._id, token });
      } else {
        // Otherwise, decode the token.
        const decoded = await decodeToken(token);
        if (decoded) {
          setUser({ token, id: decoded.id });
        }
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (registrationData) => {
    try {
      const response = await axios.post("/api/auth/signup", registrationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

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

export const useAuth = () => useContext(AuthContext);
