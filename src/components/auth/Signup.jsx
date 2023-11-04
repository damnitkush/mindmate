import { useEffect, useState } from "react";

import { logoTransparent } from "../../assets/assets";
// import DarkModeToggle from "../DarkModeToggle";
import { FcGoogle } from "react-icons/fc";
// import { RxGithubLogo } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


import {
  auth,
  signInWithGoogle,
  signupWithEmail,
} from "../../firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      //   setLoader(true);
      return;
    }
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  const register = async () => {
    if (!fname) alert("Please enter first name");
    if (!fname) alert("Please enter last name");
    if (!email) alert("Please enter email");
    if (!password) alert("Please create a password");
    if (fname && lname && email && password) {
      await signupWithEmail(fname, lname, email, password);
<<<<<<< HEAD
      navigate("/signup/details");
=======
      toast.success('Signed Up Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
>>>>>>> 78993d12f2287351baf92226444ec6271c527c1c
    }
  };
  return (
    <div className="w-2/3 px-16 pt-12 duration-700 origin-right">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-full rounded-full bg-primary-800">
            <img src={logoTransparent} className="w-14" alt="" />
          </div>
          <span className="text-3xl font-bold dark:text-gray-50">MindMate</span>
        </Link>
        {/* <DarkModeToggle /> */}
      </div>
      <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14 dark:text-gray-50">
        <h1 className="text-5xl font-extrabold ">Create an Account</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={signInWithGoogle}
            className="border w-fit rounded-lg text-slate-500 font-light px-12 py-2 flex gap-4 hover:bg-primary-100/40 dark:hover:bg-primary-100/20 active:bg-primary-100/80 dark:active:bg-primary-100/10 transition-all items-center text-sm justify-center"
          >
            <FcGoogle className="text-2xl" />
            Signup with Google
          </button>
          {/* <button className="border w-fit rounded-lg text-slate-500 font-light px-12 py-2 flex gap-4 hover:bg-primary-100/40 dark:hover:bg-primary-100/20 active:bg-primary-100/80 dark:active:bg-primary-100/10 transition-all items-center text-sm justify-center">
            <RxGithubLogo className="text-2xl text-[#211F1F]" />
            Signup with Github
          </button> */}
        </div>
        <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
          <span className="w-full flex-grow h-[1px] bg-slate-300"></span>
          <span className="whitespace-nowrap"> or continue with email</span>
          <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
        </div>

        <form className="w-full flex justify-center items-center gap-4 flex-col">
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="fname"
              className="text-xs text-slate-400 dark:text-slate-300"
            >
              Name
            </label>
            <div className="flex  gap-2 items-center justify-between">
              <input
                type="text"
                name="fname"
                id="fname"
                className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
                placeholder="First"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                name="lname"
                id="lname"
                type="text"
                className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
                placeholder="Last"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="email-signup"
              className="text-xs text-slate-400 dark:text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email-signup"
              id="email-signup"
              className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
              placeholder="user@mindmate.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="password-signup"
              className="text-xs text-slate-400 dark:text-slate-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password-signup"
              id="password-signup"
              className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button
          onClick={register}
          className="bg-gradient-to-r from-transparent to-primary-500   bg-primary-400 hover:bg-primary-500 active:bg-primary-600  transition-all text-white w-1/3 px-4 py-3 text-sm rounded-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
