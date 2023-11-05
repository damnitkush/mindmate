import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/main/Navbar";
import { Footer } from "../../components/main/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
