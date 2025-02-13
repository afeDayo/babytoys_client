import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Oops, This Page Was Not Found!</h2>
      <p className="lead mb-4">
        The link might be corrupted or the page may have been removed.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
