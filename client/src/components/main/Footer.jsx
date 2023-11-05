import React from "react";
import { logoTransparent } from "../../assets/assets";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-screen">
      <div className="bg-primary-800 text-[#949494] flex flex-wrap flex-col sm:flex-row  py-20 font-titleFont px-5 md:px-10  lg:px-20 xl:px-40 gap-8 lg:gap-12  justify-between ">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-4 ">
            <div className="w-full rounded-full bg-primary-800">
              <img src={logoTransparent} className="w-14" alt="" />
            </div>
            <span className="text-3xl font-bold text-primary-100">
              MindMate
            </span>
          </Link>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b-[0.5px] border-b-gray-200 py-2 placeholder:text-gray-200 outline-none text-white text-sm mobile:text-base font-bodyFont font-light"
          />
          <button className="w-fit rounded-lg text-sm font-bold mt-2 hover:bg-primary-300 transition-all duration-200 bg-primary-100 text-slate-700 px-8 py-2">
            Subscribe
          </button>
        </div>
        <div className=" text-right text-white pt-4  gap-2  sm:gap-0 flex flex-col items-start min-[780px]:items-end ">
          <h2 className="mobile:text-lg font-semibold font-titleFont text-2xl ">
            Contact
          </h2>
          <br />
          <div className="font-bodyFont mobile:text-base text-sm flex flex-col gap-2 font-extralight items-start min-[780px]:items-end">
            <div className=" flex items-start min-[780px]:items-end">
              Phone : +91 9xxxxxxxx0
            </div>
            <div className=" flex items-start min-[780px]:items-end">
              Email : contact@mindmate.com
            </div>
          </div>
          <div className="flex gap-4 text-base pt-4">
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:bg-primary-300 hover:border-primary-300 hover:text-primary-800 transition-all duration-200 ">
              <Link to="https://www.instagram.com/wear_worx/">
                <FaInstagram />
              </Link>
            </span>
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:bg-primary-300 hover:border-primary-300 hover:text-primary-800 transition-all duration-200">
              <FaFacebookF />
            </span>
          </div>
        </div>
        <div className="text-right text-white pt-4  flex flex-col items-start min-[780px]:items-end gap-4">
          <h2 className="mobile:text-lg font-semibold font-titleFont text-2xl">
            Recent
          </h2>
          <div className="font-bodyFont font-extralight mobile:text-sm text-xs flex flex-col items-start min-[780px]:items-end gap-2 ">
            <div>About Us</div>
            <div>Services</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-950 text-white py-2 text-center  text-sm flex items-center justify-center">
        &copy; Copyright 2023 MindMate - All Rights Reserved
      </div>
    </div>
  );
};
