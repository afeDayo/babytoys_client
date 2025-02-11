import React from "react";
import { Link, Outlet } from "react-router-dom";
import reglogo from "../../public/image 2.png";

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">
        <img className="my-5" src={reglogo} alt="" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
