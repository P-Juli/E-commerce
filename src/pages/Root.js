// Root.js
import React from "react";
import Navbar from "../components/Navbar.js";
import { Outlet } from "react-router-dom";
import './Root.css'

const Root = () => {
  return (
    <div className="root-container">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
