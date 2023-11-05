// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import { useState } from "react";

const Dashboard = () => {
  // Profile Settings Modal
  const [show, setShow] = useState(false);
  const setShowProp = (state) => {
    setShow(!state);
  };
  const stopCloseModal = (e) => e.stopPropagation();
  //
  return (
    <div className="dark:bg-gray-700  flex " onClick={() => setShow(false)}>
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <Navbar
          setShow={() => setShowProp(show)}
          show={show}
          stopCloseModal={(e) => stopCloseModal(e)}
        />
        <div className="bg-white dark:bg-gray-700 rounded-ss-2xl w-full h-max pt-6 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
