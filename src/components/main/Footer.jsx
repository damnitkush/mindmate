import React from "react";
import { logoTransparent } from "../../assets/assets";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-screen">
      <div className="bg-black text-[#949494] flex flex-wrap flex-col sm:flex-row  py-20 font-titleFont px-5 md:px-10  lg:px-20 xl:px-40 gap-8 lg:gap-12  justify-between">
        <div className="flex flex-col gap-4">
          <img src={logoTransparent} className="w-48 sm:w-60" alt="" />
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent border-b-[0.5px] border-b-gray-200 py-2 placeholder:text-gray-300 outline-none text-white text-sm mobile:text-base font-bodyFont font-light"
          />
          <button className="w-fit rounded-full text-sm mobile:text-xs font-bold mt-2 hover:bg-gray-300 transition-all duration-200 bg-gray-100 text-gray-700 px-4 py-3">
            Subscribe
          </button>
        </div>
        <div className=" text-right text-white pt-4  gap-2  sm:gap-0 flex flex-col items-start min-[780px]:items-end justify-between ">
          <h2 className="text-base mobile:text-lg font-semibold font-titleFont ">
            Contact
          </h2>
          <div className="font-bodyFont mobile:text-base text-sm flex flex-col gap-2 font-extralight items-start min-[780px]:items-end">
            <div className=" flex items-start min-[780px]:items-end">
              Phone : +91 9xxxxxxxx0
            </div>
            <div className=" flex items-start min-[780px]:items-end">
              Email : contact@wearworx.com
            </div>
          </div>
          <div className="flex gap-4 text-base pt-4">
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200 ">
              <Link to="https://www.instagram.com/wear_worx/">
                <FaInstagram />
              </Link>
            </span>
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200">
              <FaFacebookF />
            </span>
          </div>
        </div>
        <div className="text-right text-white pt-4  flex flex-col items-start min-[780px]:items-end gap-4">
          <h2 className="text-base mobile:text-lg font-semibold font-titleFont ">
            Recent
          </h2>
          <div className="font-bodyFont font-extralight mobile:text-sm text-xs flex flex-col items-start min-[780px]:items-end gap-2">
            <div>About Us</div>
            <div>Services</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#21821E] text-white h-10 text-center mobile:text-sm font-bodyFont text-xs py-1 md:text-base flex items-center justify-center">
        &copy; Copyright 2023 MindMate - All Rights Reserved
      </div>
    </div>
  );
};
