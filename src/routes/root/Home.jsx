import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBox } from "react-icons/bs";

import { GiBrain } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { connect, peers } from "../../assets/assets";

const Home = () => {
  return (


    <div>
      <div className="pt-24 px-16 w-full flex flex-col gap-40">
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold leading-normal">
              Connecting individuals for mental health support
            </h1>
            <span className="text-lg">
              Find understanding and support from empathetic peers on our
              platform.
            </span>
            <div className=" flex gap-4 mt-4">
              <button className="rounded-sm border  border-transparent bg-primary-800 text-primary-50 hover:bg-primary-900 active:bg-primary-950 transition-all px-8 py-2">
                Join
              </button>
              <button className="rounded-sm border border-primary-800 hover:bg-primary-100 text-primary-800 active:bg-primary-200 transition-all px-8 py-2">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <img src={connect} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-3 gap-24 ">
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
          <span className="mt-4 text-sm flex gap-1 hover:gap-2 hover:text-primary-700 cursor-pointer transition-all items-center">
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
            Access a wealth of resources and tools to aid your mental well-being
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
      </div>

      <div className="flex flex-row justify-center mt-10 px-16">
        <div>
          <h1 className="font-bold text-5xl">
            Connect with supportive <br /> peers for mental well-being
          </h1>
          <br />
          <p>
            Our platform provides a safe and understanding space where
            individuals facing mental health challenges can connect with
            empathetic peer allies. Through meaningful conversations and shared
            experiences, our community fosters support, understanding, and
            growth.
          </p>

          <br />

          <div className="flex items-center gap-3">
            <BsBox />
            Find comfort and guidance in a compassionate community
          </div>

          <div className="flex items-center gap-3">
            <BsBox />
            Share your journey and inspire others on their path
          </div>

          <div className="flex items-center gap-3">
            <BsBox />
            Discover new perspectives and coping strategies for mental
            well-being
          </div>

          <br />
          <br />

          <div className="flex justify-center gap-5 w-1/2">
            <button className="border border-black py-1 px-6 rounded-lg ">
              Join
            </button>
            <button className="py-3 px-6 flex gap-2 items-center">
              Learn More <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-[1000px] rounded-sm mr-2"
            src={peers}
            alt=""
          />
        </div>
      </div>

      <br />
      <br />
      <div className="flex w-11/12 gap-7 justify-center">
        <h1 className="font-bold text-3xl">
          Connect with supportive <br />
          peer allies
        </h1>
        <div>
          <p>Discover a community that understands</p>
          <div className="flex justify-center gap-6 mt-4">
            <button className="text-white bg-black py-3 px-6 rounded-lg">
              Join
            </button>
            <button className="border border-black py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
