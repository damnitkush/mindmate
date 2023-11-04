/* eslint-disable react/prop-types */

import { useRef } from "react";
import { authBg } from "../../assets/assets";

import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";

const Auth = ({ signup }) => {
  const isSignup = signup ? true : false;

  const loginScreen = useRef();
  const imgText = useRef();
  const shift = () => {
    loginScreen.current.classList.toggle("-translate-x-[41%]");
    imgText.current.classList.toggle("-translate-x-1/2");
  };
  return (
    <div className="w-screen overflow-hidden">
      <div
        className={`flex justify-between w-[170%] duration-700 ${
          isSignup ? "-translate-x-[41%]" : ""
        }`}
        ref={loginScreen}
      >
        <Login />
        <div className="w-1/3 relative h-screen overflow-hidden ">
          <img
            src={authBg}
            className="w-full h-screen object-cover absolute top-0 right-0 -z-20"
            alt=""
          />
          <div
            className={`w-[200%] flex h-full items-center justify-center overflow-hidden duration-700 ${
              isSignup ? " " : "-translate-x-1/2"
            }`}
            ref={imgText}
          >
            <div className="flex overflow-hidden w-1/2 origin-bottom duration-500 flex-col justify-center items-center text-primary-950 h-full gap-8">
              <h1 className="text-5xl drop-shadow-2xl font-bold">
                Already a user?
              </h1>
              <div className="text-xl font-medium text-center text-primary-700 px-20 tracking-wider">
                Login to your account
              </div>
              <button
                onClick={shift}
                className="py-2 px-20 bg-white text-primary-700 font-medium mt-6 hover:bg-primary-200 transition-all rounded-full shadow-lg"
              >
                Login
              </button>
            </div>
            <div className="flex overflow-hidden w-1/2 origin-top duration-500 flex-col justify-center items-center text-primary-950 h-full gap-8">
              <h1 className="text-5xl drop-shadow-2xl font-bold">New Here?</h1>
              <div className="text-xl font-medium text-center text-primary-700 px-20 tracking-wider">
                Sign up and discover a great amount of new opportunities
              </div>
              <button
                onClick={shift}
                className="py-2 px-20 bg-white text-primary-700 font-medium mt-6 hover:bg-primary-200 transition-all rounded-full shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <Signup />
      </div>
    </div>
  );
};

export default Auth;
