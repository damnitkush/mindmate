import { useContext, useEffect, useState } from "react";
import { logoTransparent } from "../../assets/assets";
// import DarkModeToggle from "../DarkModeToggle";
import { FcGoogle } from "react-icons/fc";
// import { RxGithubLogo } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  loginWithEmail,
  signInWithGoogle,
} from "../../firebase/firebase";
import Loader from "../Loader";
import UserContext from "../../context/userContext";

const Login = () => {
  // States of Form Values
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get user using hook
  const [user, loading] = useAuthState(auth);
  const { setLocalUser} = useContext(UserContext)


  // Navigate on login
  const navigate = useNavigate();
  // useEffect(() => {
  //   // if (loading) {
  //   //   return;
  //   // }
    
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user, loading]);

  // Login Function from Firebase
  const loginUser = async () => {
    try {
      setLoader(true);

      await loginWithEmail(email, password);
      // setLocalUser({fname, lname, email})

      if (user) {
        setLoader(false);
        // console.log(true)
        navigate("/dashboard/home");
  
        console.log(user);
      }
    } catch {
      setLoader(false);
    }
  };
  return (
    <>
      {loader && <Loader />}

      <div className="w-2/3 px-16 pt-12 duration-700 origin-left">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-full rounded-full bg-primary-800">
              <img src={logoTransparent} className="w-14" alt="" />
            </div>
            <span className="text-3xl font-bold dark:text-gray-50">
              MindMate
            </span>
          </Link>
          {/* <DarkModeToggle /> */}
        </div>
        <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14 dark:text-gray-50">
          <h1 className="text-5xl font-extrabold ">Login to Your Account</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={signInWithGoogle}
              className="border w-fit rounded-lg font-light text-slate-500 px-12 py-2 flex gap-4 hover:bg-primary-100/40 dark:hover:bg-primary-100/20 active:bg-primary-100/80 dark:active:bg-primary-100/10 transition-all items-center text-sm justify-center"
            >
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            {/* <button className="border w-fit rounded-lg font-light text-slate-500 px-12 py-2 flex gap-4 hover:bg-primary-100/40 dark:hover:bg-primary-100/20 active:bg-primary-100/80 dark:active:bg-primary-100/10 transition-all items-center text-sm justify-center">
            <RxGithubLogo className="text-2xl text-[#211F1F]" />
            Login with Github
          </button> */}
          </div>
          <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
            <span className="w-full flex-grow h-[1px] bg-slate-300"></span>or
            <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
          </div>
          <div className="w-full flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="email-login"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email-login"
                id="email-login"
                className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
                placeholder="user@mindmate.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-4  items-center justify-center">
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="password-login"
                  className="text-xs text-slate-400 dark:text-slate-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password-login"
                  id="password-login"
                  className="w-full px-3 placeholder:text-slate-400/90 dark:placeholder:text-slate-500 py-2 rounded-lg bg-slate-200/70 focus-visible:outline-primary-600 text-sm dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-primary-500 "
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  hidden={false}
                />
              </div>
              <div className=" w-full px-2 flex justify-between items-center text-xs">
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className=" accent-primary-600"
                  />
                  <label
                    htmlFor="remember"
                    className="text-slate-500 dark:text-slate-300"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-primary-600 dark:text-primary-500 hover:dark:text-primary-400 hover:text-primary-700 transition-all relative cursor-pointer after:absolute after:bottom-0 py-1 after:left-0 after:w-full after:h-[1px] after:bg-primary-700 after:dark:bg-primary-400 after:opacity-0 after:transition-all hover:after:opacity-100">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={loginUser}
            className="bg-gradient-to-r from-transparent to-primary-500   bg-primary-400 hover:bg-primary-500 active:bg-primary-600  transition-all text-white w-1/3 px-4 py-3 text-sm rounded-full"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
