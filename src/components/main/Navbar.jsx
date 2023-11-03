/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { logoTransparent } from "../../assets/assets";
import { useContext, useEffect } from "react";
import DarkModeToggle from "../DarkModeToggle";
import Theme from "../../context/darkModeContext";

const Navbar = ({ isHome }) => {
  const { darkMode } = useContext(Theme);

  useEffect(() => {
    window.onscroll = function () {
      const nav = document.getElementById("navbar");
      if (document.documentElement.scrollTop >= 80) {
        darkMode
          ? nav.classList.add("nav-dark")
          : nav.classList.add("nav-light");
        nav.classList.remove("nav-transparent");
      } else {
        if (isHome) {
          nav.classList.add("nav-transparent");
          nav.classList.remove("nav-dark");
          nav.classList.remove("nav-light");
        }
      }
    };
  }, [isHome, darkMode]);
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (document.documentElement.scrollTop >= 80) {
      if (darkMode) {
        nav.classList.add("nav-dark");
        nav.classList.remove("nav-light");
      } else {
        nav.classList.add("nav-light");
        nav.classList.remove("nav-dark");
      }
    } else {
      if (isHome) {
        nav.classList.remove("nav-dark");
        nav.classList.remove("nav-light");
      }
    }
  }, [darkMode, isHome]);

  return (
    <div
      className={`py-3 px-16 flex justify-between items-center sticky top-0 z-50 transition-all ${
        !isHome && "bg-gradient-to-r from-primary-400 to-primary-600"
      }`}
      id="navbar"
    >
      {/* <div className="z-[100] absolute left-0 top-0 bg-gradient-to-r from-primary-400 to-primary-600 h-full w-full"></div> */}
      <Link to="/" className="flex items-center gap-4">
        <img src={logoTransparent} className="w-14" alt="" />
        <span className="text-3xl font-bold text-white">MindMate</span>
      </Link>
      <div className="flex gap-10 text-base font-medium items-center">
        <Link
          to="/"
          className="text-white hover:text-secondary-300  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-secondary-400 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
        >
          Home
        </Link>
        <span className="text-white hover:text-secondary-300  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-secondary-400 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Features
        </span>
        <span className="text-white hover:text-secondary-300  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-secondary-400 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Resources
        </span>
        <span className="text-white hover:text-secondary-300  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-secondary-400 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
          Blog
        </span>
        <Link
          to="/contact"
          className="text-white hover:text-secondary-300  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-secondary-400 hover:translate-y-[0.1rem] transition-all py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
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
            className="py-2 text-center rounded-full w-28 font-medium shadow-lg bg-gradient-to-r from-transparent to-secondary-500  bg-secondary-400  text-white cursor-pointer hover:bg-secondary-500 active:bg-secondary-600 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
