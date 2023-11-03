/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { logoTransparent } from "../../assets/assets";
// import { useContext, useEffect, useRef } from "react";
import DarkModeToggle from "../DarkModeToggle";
// import Theme from "../../context/darkModeContext";

const Navbar = ({ isHome }) => {
  // const { darkMode } = useContext(Theme);

  // useEffect(() => {
  //   let navTop = document.getElementById("navTop");
  //   let navSticky = document.getElementById("navSticky");
  //   window.onscroll = function () {
  //     if (document.documentElement.scrollTop >= 80) {
  //       navTop.classList.add("scale-y-0");
  //       navTop.classList.remove("scale-y-100");
  //       navSticky.classList.add("scale-y-100");
  //       navSticky.classList.remove("scale-y-0");
  //     }
  //     if (document.documentElement.scrollTop >= 200) {
  //       navSticky.classList.add("scale-y-0");
  //       navSticky.classList.remove("scale-y-100");
  //       navTop.classList.remove("scale-y-0");
  //       navTop.classList.add("scale-y-100");
  //     }
  //   };
  // }, []);

  return (
    <>
      <div

        className={`py-3 px-16 flex justify-between items-center sticky scale-y-100 origin-top top-0 z-50 transition-all ${
          !isHome &&
          "bg-gradient-to-r from-primary-100 to-primary-200 text-primary-900"
        }`}
      >
        {/* <div className="z-[100] absolute left-0 top-0 bg-gradient-to-r from-primary-400 to-primary-600 h-full w-full"></div> */}
        <Link to="/" className="flex items-center gap-4 ">
          <div className="w-full rounded-full bg-primary-800">
            <img src={logoTransparent} className="w-14" alt="" />
          </div>
          <span className="text-3xl font-bold text-primary-900">MindMate</span>
        </Link>
        <div className="flex gap-10 text-base font-medium items-center">
          <Link
            to="/"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Home
          </Link>
          <span className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
            Features
          </span>
          <span className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
            Resources
          </span>
          <span className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
            Blog
          </span>
          <Link
            to="/contact"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div></div>
        <div className="flex gap-8 items-center justify-between">
          <DarkModeToggle />
          <div className="flex gap-2 items-center justify-between">
            <Link
              to="/login"
              className="py-2 text-center rounded-lg w-28 font-medium shadow-lg   bg-primary-50   cursor-pointer hover:text-primary-50 text-primary-800 hover:bg-primary-600 active:bg-primary-800 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
