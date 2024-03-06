import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "../style";

const AppLayout = () => {
  return (
    <div className="  bg-black  text-white  w-full    overflow-hidden">
      <ToastContainer />
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-black  `}>
        <div className={`${styles.boxWidth} bg-black  `}>
          <Navbar />
        </div>
      </div>
      <div className="container m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
