/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { logoTransparent } from "../../assets/assets";
import { useEffect } from "react";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = ({ isHome }) => {
  // const { darkMode } = useContext(Theme);

  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (nav) {
      window.onscroll = function () {
        if (document.documentElement.scrollTop >= 80) {
          nav.classList.add("from-primary-100");
          nav.classList.add("to-primary-200");
          nav.classList.remove("bg-transparent");
        } else {
          nav.classList.remove("from-primary-100");
          nav.classList.remove("to-primary-200");
          nav.classList.add("bg-transparent");
        }
      };
    }
  }, []);

  return (
    <>
      <div
        id="navbar"
        className={`py-3 px-16 flex justify-between items-center sticky scale-y-100 origin-top top-0 z-50 transition-all ${
          !isHome && "bg-gradient-to-r bg-transparent text-primary-900"
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
          <NavLink
            to="/"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Pricing
          </NavLink>

          <NavLink
            to="/blogs"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all  py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className=" hover:text-primary-700  cursor-pointer relative before:content-[''] before:absolute before:h-[2px] before:w-full before:left-0 before:bottom-0 before:bg-primary-700 hover:translate-y-[0.1rem] transition-all py-2   before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300"
          >
            Contact Us
          </NavLink>
        </div>
        <div></div>
        <div className="flex gap-8 items-center justify-between">
          {/* <DarkModeToggle /> */}
          <div className="flex gap-2 items-center justify-between">
            <Link
              to="/login"
              className="py-2 border-t border-t-primary-100 text-center rounded-lg w-28 font-medium shadow   bg-primary-50   cursor-pointer hover:text-primary-50 text-primary-800 hover:bg-primary-500 active:bg-primary-600 transition-all"
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
