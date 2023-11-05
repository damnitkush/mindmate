import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { connect, peers } from "../../assets/assets";
import PricingComp from "../../components/main/PricingComp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="py-24 w-full flex flex-col gap-40">
        <div className="flex justify-between items-center gap-10  px-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold leading-normal">
              Connecting individuals for mental health support
            </h1>
            <span className="text-lg">
              Find understanding and support from empathetic peers on our
              platform.
            </span>
            <div className=" flex gap-4 mt-4">
              <Link to="./Signup"
              className="rounded-lg border border-transparent bg-primary-800 text-primary-50 hover:bg-primary-900 active:bg-primary-950 transition-all px-8 py-2 ">
                Join
              </Link>
              <Link to="/Blogs" 
              className="rounded-lg border border-primary-800 hover:bg-primary-100 text-primary-800 active:bg-primary-200 transition-all px-8 py-2">
                Learn More
              </Link>
            </div>
          </div>
          <div className="">
            <img src={connect} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between items-center bg-gradient-to-br from-primary-50 to-primary-100   p-16">
          <div className=" text-4xl font-bold leading-snug w-1/2 pr-40">
            Discover a community of empathetic allies on our Projects
          </div>
          <div className="w-1/2">
            Our platform connects individuals facing mental health challenges
            with supportive peer allies. Through our user-friendly interface,
            you can easily find and connect with others who understand your
            experiences and provide the support you need. Join our community
            today and start your journey towards improved mental
          </div>
        </div>
        <div className="grid grid-cols-3 gap-24  px-16">
          <div className="flex flex-col gap-4">
            <span className="w-full h-10">
              <GiBrain className="text-3xl" />
            </span>
            <h6 className="font-semibold text-xl">
              Connect with like-minded individuals who understand your struggles
            </h6>
            <div className="text-sm">
              Our platform creates a safe space for individuals to share their
              stories and support each other.
            </div>
            <span
             className="mt-4 text-sm flex gap-1 hover:gap-2 hover:text-primary-700 cursor-pointer transition-all items-center">
              Join <AiOutlineArrowRight />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="w-full h-10">
              <MdContactSupport className="text-3xl" />
            </span>
            <h6 className="font-semibold text-xl">
              Share your experiences and receive valuable support from our
              community
            </h6>
            <div className="text-sm">
              Our platform creates a safe space for individuals to share their
              stories and support each other.
            </div>
            <span className="mt-4 text-sm flex gap-1 hover:gap-2 hover:text-primary-700 cursor-pointer transition-all items-center">
              Sign Up <AiOutlineArrowRight />
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="w-full h-10">
              <RiMentalHealthLine className="text-3xl" />
            </span>
            <h6 className="font-semibold text-xl">
              Access a wealth of resources and tools to aid your mental
              well-being
            </h6>
            <div className="text-sm">
              Our platform creates a safe space for individuals to share their
              stories and support each other.
            </div>
            <span className="mt-4 text-sm flex gap-1 hover:gap-2 hover:text-primary-700 cursor-pointer transition-all items-center">
              Learn More <AiOutlineArrowRight />
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-32  px-16">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-5xl leading-normal">
              Connect with supportive peers for mental well-being
            </h1>

            <p>
              Our platform provides a safe and understanding space where
              individuals facing mental health challenges can connect with
              empathetic peer allies. Through meaningful conversations and
              shared experiences, our community fosters support, understanding,
              and growth.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <VscDebugBreakpointLogUnverified />
                Find comfort and guidance in a compassionate community
              </div>

              <div className="flex items-center gap-3">
                <VscDebugBreakpointLogUnverified />
                Share your journey and inspire others on their path
              </div>

              <div className="flex items-center gap-3">
                <VscDebugBreakpointLogUnverified />
                Discover new perspectives and coping strategies for mental
                well-being
              </div>
            </div>

            <div className=" flex gap-4 mt-4">
              <button className="rounded-lg border border-primary-800 hover:bg-primary-800 text-primary-800 hover:text-primary-50 active:bg-primary-900 transition-all px-8 py-2">
                Join
              </button>
              <button className="flex gap-1 hover:gap-2 hover:text-primary-700 cursor-pointer transition-all items-center py-2 px-4">
                Learn More <IoIosArrowForward />
              </button>
            </div>
          </div>

          <img className="w-1/3" src={peers} alt="" />
        </div>

        <div className="flex flex-col justify-center w-full items-center gap-4 p-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <h1 className="font-bold text-4xl">
            Connect with supportive peer allies
          </h1>

          <p>Discover a community that understands</p>
          <div className=" flex gap-4 mt-4">
            <button className="rounded-lg border  border-transparent bg-primary-800 text-primary-50 hover:bg-primary-900 active:bg-primary-950 transition-all px-8 py-2">
              Join
            </button>
            <button className="rounded-lg border border-primary-800 hover:bg-primary-200 text-primary-800 active:bg-primary-300 transition-all px-8 py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="px-16 flex flex-col gap-4">
          <PricingComp />

          <Link
            to="/pricing"
            className="rounded-lg mx-auto mt-10 border border-primary-800 hover:bg-primary-100 text-primary-800 active:bg-primary-200 transition-all px-8 py-2"
          >
            View More
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Home;
