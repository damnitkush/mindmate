/* eslint-disable react/prop-types */
import { AiOutlineClose, AiFillInfoCircle } from "react-icons/ai";
import { BsFileEarmarkImage } from "react-icons/bs";
import { dp } from "../../assets/assets";

const UpdateProfile = ({ show, close, outsideClick }) => {
  return (
    <>
      {show && (
        <div
          onClick={close}
          className="h-screen z-[100] w-screen fixed inset-0 bg-slate-950/40 dark:bg-slate-950/50 flex justify-center py-12"
        >
          <div
            onClick={outsideClick}
            className="h-max max-h-[680px] relative overflow-scroll w-1/2 bg-white dark:bg-gray-800 rounded-xl "
          >
            <div className="flex bg-white dark:bg-gray-800 z-50 items-center sticky top-0 justify-between py-4 border-b dark:border-slate-600 px-8">
              <h1 className="font-bold text-xl dark:text-slate-50">
                Update Profile
              </h1>
              <div
                onClick={close}
                className="p-2 text-lg rounded hover:bg-slate-100 dark:hover:bg-slate-600 active:bg-slate-200 dark:active:bg-slate-700 select-none duration-200 cursor-pointer"
              >
                <AiOutlineClose className="dark:text-slate-50" />
              </div>
            </div>
            <form className="px-8 py-4 flex flex-col gap-4 overflow-scroll">
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="username"
                  className="text-slate-600 dark:text-slate-100 w-fit"
                >
                  Choose a username for your public profile<sup>*</sup>
                </label>
                <span className="dark:bg-slate-700 overflow-hidden dark:border-none relative border w-full rounded group flex items-center before:content-['@'] before:px-4 before:text-lg before:text-purple-600 before:dark:text-purple-300 before:z-10">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="relative w-full h-full dark:bg-slate-700 dark:text-slate-100 dark:border-slate-500 border-r outline-none pr-2 focus-visible:outline-none py-3 pl-12 -translate-x-12"
                  />
                  {/* <div className="absolute bottom-0 h-[2px] w-full bg-purple-600 scale-x-0 transition-all origin-left group-focus-visible:scale-x-100"></div> */}
                </span>
                <button className="mx-auto bg-purple-500 dark:bg-purple-600  text-white px-4 py-2 text-xs rounded hover:bg-purple-400 dark:hover:bg-purple-700 duration-200 disabled:border disabled:bg-slate-200 disabled:text-gray-400 disabled:shadow-inner disabled:border-slate-300">
                  Save
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-slate-600 dark:text-slate-100">
                  Choose a profile picture<sup>*</sup>
                </div>
                <div className="flex gap-8 h-max items-center justify-between">
                  <img src={dp} className="w-36 rounded-full  ml-4" alt="" />
                  <label
                    htmlFor="profile_img"
                    className="flex flex-col gap-4 cursor-pointer bg-gray-100 dark:bg-slate-700 w-full h-36 border border-gray-500 dark:border-gray-300 border-dashed rounded-lg items-center justify-center"
                  >
                    <BsFileEarmarkImage className="text-5xl text-slate-600 dark:text-slate-300" />
                    <div className="flex-col flex text-sm text-slate-600 dark:text-slate-300 font-light justify-center items-center">
                      <span>Drag a file here</span>
                      <span>
                        or{" "}
                        <span className="uppercase text-purple-600 dark:text-purple-300">
                          browse
                        </span>
                      </span>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="profile_img"
                    id="profile_img"
                    className="hidden"
                  />
                </div>
                <div className="w-full flex items-center gap-2 bg-purple-100 text-purple-700 dark:bg-purple-600/20 dark:text-purple-100 p-4 rounded font-light text-sm">
                  <AiFillInfoCircle className="text-xl" />
                  Images should be less than 2MB
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-slate-600 dark:text-slate-100 w-fit"
                >
                  Your Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="relative dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-slate-500 dark:focus-visible:outline w-full h-full border rounded outline-none px-4 focus-visible:outline-none py-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-slate-600 dark:text-slate-100 w-fit"
                >
                  Email<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="relative dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-slate-500 dark:focus-visible:outline w-full h-full border rounded outline-none px-4 focus-visible:outline-none py-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="tagline"
                  className="text-slate-600 dark:text-slate-100 w-fit"
                >
                  What&apos;s your tagline?<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="tagline"
                  id="tagline"
                  className="relative dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-slate-500 dark:focus-visible:outline w-full h-full border rounded outline-none px-4 focus-visible:outline-none py-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="about"
                  className="text-slate-600 dark:text-slate-100 w-fit"
                >
                  About Me<sup>*</sup>
                </label>
                <textarea
                  rows={3}
                  type="text"
                  name="about"
                  id="about"
                  className="relative dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-slate-500 dark:focus-visible:outline w-full h-full border rounded outline-none px-4 focus-visible:outline-none py-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="text-slate-600 w-fit dark:text-slate-100"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="relative dark:bg-slate-700 dark:text-slate-100 dark:border-none dark:focus-visible:outline-slate-500 dark:focus-visible:outline w-full h-full border rounded outline-none px-4 focus-visible:outline-none py-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div
                  htmlFor="gender"
                  className="text-slate-600 dark:text-slate-100"
                >
                  Gender
                </div>
                <div className="flex gap-4">
                  <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      className="w-5 h-5"
                    />
                    <label htmlFor="male" className="dark:text-slate-200">
                      Male
                    </label>
                  </div>
                  <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      className="w-5 h-5"
                    />
                    <label htmlFor="female" className="dark:text-slate-200">
                      Female
                    </label>
                  </div>
                  <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      className="w-5 h-5 bg-slate-500"
                    />
                    <label htmlFor="other" className="dark:text-slate-200">
                      Other/Prefer Not To answer
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="my-4 py-2 text-center w-full bg-purple-600 dark:bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-500 dark:hover:bg-purple-700 transition-all"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;
