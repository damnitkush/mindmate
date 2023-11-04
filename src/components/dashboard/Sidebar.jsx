// import React from 'react'
import { BiHomeSmile, BiPulse } from "react-icons/bi";
import { GoGraph, GoPeople } from "react-icons/go";
import { MdOutlineCalendarMonth, MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

import { logoTransparent } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-800 sticky top-0 left-0 shadow">
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Link to="/" className="flex items-center gap-4 h-20 px-8">
            <div className="w-fit rounded-full bg-primary-800">
              <img src={logoTransparent} className="w-10" alt="" />
            </div>
            <span className="text-2xl font-bold text-primary-900">
              MindMate
            </span>
          </Link>

          <div className="py-8 w-full flex flex-col gap-2 text-slate-500 dark:text-slate-100 text-sm">
            <NavLink
              to="/dashboard/home"
              className="pl-8 pr-4 py-3 h-full flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <BiHomeSmile className="text-xl" />
                Dashboard
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/projects"
              className=" pl-8 pr-4 py-3 flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all"
            >
              <span className="flex items-center gap-3">
                <GoGraph className="text-xl" />
                Projects
              </span>
            </NavLink>
            <div className=" pl-8 pr-4 py-3 flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <span className="flex items-center gap-3">
                <GoPeople className="text-xl" />
                Clients
              </span>
            </div>
            <div className=" pl-8 pr-4 py-3 flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
              <span className="flex items-center gap-3">
                <BiPulse className="text-xl" />
                Analytics
              </span>
            </div>
            <NavLink
              to="calendar"
              className="pl-8 pr-4 py-3 h-full flex gap-3 items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <MdOutlineCalendarMonth className="text-xl" />
                Calendar
              </span>
            </NavLink>
          </div>
        </div>
        <div className="py-8 w-full flex flex-col gap-0 text-slate-500 dark:text-slate-100 text-sm">
          <div className=" px-8 py-3 flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
            <MdOutlineSettings className="text-xl" />
            Settings
          </div>
          <div className="px-8 py-3 text-red-600 dark:text-red-400 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-all">
            <TbLogout2 className="text-xl" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
