import React from "react";
import { GrDiamond } from "react-icons/gr";
import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
const PricingComp = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center w-1/2 mx-auto ">
        <h1 className="text-5xl font-medium">Discover Plans for You</h1>
        <div className="text-lg text-slate-500 text-center font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio
          eligendi quis, quisquam accusamus tempore facilis saepe dicta eveniet
          hic!
        </div>
      </div>
      <div className="flex flex-row-reverse gap-16 px-32 mt-20">
        <div className="border w-1/3 p-8 rounded-lg flex flex-col gap-4 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="shadow rounded-full p-2  w-fit">
            <GrDiamond className="text-xl" />
          </div>
          <h2 className="text-primary-800 font-semibold text-2xl">Premium</h2>
          <span className="text-sm text-slate-700 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            dignissimos.
          </span>
          <div className="flex gap-2 items-end">
            <span className="font-semibold text-5xl text-primary-700">$50</span>
            <span className="font-light text-slate-600 text-sm pb-1">
              / per month
            </span>
          </div>
          <div className="border-b w-full my-2"></div>
          <button className="rounded-lg bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50 py-3 text-sm transition-all">
            Get Started
          </button>
        </div>

        <div className="border w-1/3 p-8 rounded-lg flex flex-col gap-4">
          <div className="shadow rounded-full p-2  w-fit">
            <BsLightningCharge className="text-xl" />
          </div>
          <h2 className="text-primary-800 font-semibold text-2xl">Pro</h2>
          <span className="text-sm text-slate-700 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            dignissimos.
          </span>
          <div className="flex gap-2 items-end">
            <span className="font-semibold text-5xl text-primary-700">$39</span>
            <span className="font-light text-slate-600 text-sm pb-1">
              / per month
            </span>
          </div>
          <div className="border-b w-full my-2"></div>
          <button className="rounded-lg bg-primary-200 hover:bg-primary-300 active:bg-primary-400 text-primary-700 py-3 text-sm transition-all">
            Get Started
          </button>
        </div>
        <div className="border w-1/3 p-8 rounded-lg flex flex-col gap-4">
          <div className="shadow rounded-full p-2  w-fit">
            <AiOutlineUser className="text-xl" />
          </div>
          <h2 className="text-primary-800 font-semibold text-2xl">Free</h2>
          <span className="text-sm text-slate-700 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            dignissimos.
          </span>
          <div className="flex gap-2 items-end">
            <span className="font-semibold text-5xl text-primary-700">$0</span>
            <span className="font-light text-slate-600 text-sm pb-1">
              / per month
            </span>
          </div>
          <div className="border-b w-full my-2"></div>
          <button className="rounded-lg bg-primary-200 hover:bg-primary-300 active:bg-primary-400 text-primary-700 py-3 text-sm transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingComp;
