import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import DataTransfer from "../components/Forms/Tranferences.js/DataTransfer";

const Services = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Services;
