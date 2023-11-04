/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
import { dp } from "../../assets/assets";
import SwitchDarkMode from "../DarkModeToggle";
import SearchBar from "./SearchBar";

const Navbar = ({ show, setShow, stopCloseModal }) => {
  return (
    <>
      <div className="h-20 px-6 shadow flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800 z-50">
        <div>
          <h1 className="text-2xl font-bold dark:text-slate-50">
            Hello, Saksham
          </h1>
          <span className="text-sm text-slate-500 dark:text-slate-300">
            Lets organize your work
          </span>
        </div>
        <SearchBar />

        <div className="flex gap-6 items-center justify-center">
          <SwitchDarkMode />
          <div onClick={stopCloseModal} className="flex gap-2 items-center">
            <img
              src={dp}
              className=" rounded-full w-14 cursor-pointer outline-4 outline outline-transparent dark:hover:outline-purple-400/30 hover:outline-purple-100 duration-300"
              onClick={setShow}
              alt=""
            />
            {show && (
              <div className="flex flex-col absolute top-16 right-6 w-72 h-fit overflow-hidden bg-white dark:bg-slate-700 shadow-xl rounded-lg transition-all">
                <div className="flex flex-col gap-4 py-4 border-b dark:border-slate-500">
                  <div className="flex items-center gap-2 px-4">
                    <img src={dp} className="rounded-full w-12" alt="" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="overflow-hidden text-ellipsis dark:text-slate-100">
                        Saksham Gambhir
                      </span>
                      <span className="text-slate-400  text-xs overflow-hidden text-ellipsis">
                        saksham2211gambhir@gmail.com
                      </span>
                    </div>
                  </div>
                  <span className="text-purple-700 dark:text-purple-300  tracking-wide rounded hover:bg-purple-100/80 dark:hover:bg-purple-200/20 transition-all text-sm px-2 w-fit py-1 mx-2 cursor-pointer">
                    Become a member
                  </span>
                </div>
                <div className="flex flex-col text-sm">
                  <Link
                    to="/dashboard/profile"
                    onClick={setShow}
                    className="hover:bg-slate-100 dark:hover:bg-slate-600 px-4 py-2 text-slate-600 dark:text-slate-300 cursor-pointer"
                  >
                    Profile
                  </Link>
                  <span className="hover:bg-slate-100 dark:hover:bg-slate-600 px-4 py-2 text-slate-600 dark:text-slate-300 cursor-pointer">
                    Settings
                  </span>
                  <span className="hover:bg-slate-100 dark:hover:bg-slate-600 px-4 py-2 text-slate-600 dark:text-slate-300 cursor-pointer">
                    Help
                  </span>
                  <span className="hover:bg-slate-100 dark:hover:bg-slate-600 px-4 pt-2 pb-3 text-slate-600 dark:text-slate-300 cursor-pointer">
                    Sign out
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
