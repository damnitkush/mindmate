import React from "react";
import { logoColored, logoTransparent } from "../assets/assets";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-primary-400/20 backdrop-blur z-[1000]">
      <div>
        <div className="w-fit rounded-full overflow-hidden bg-primary-800 animate-ping">
          <img src={logoTransparent} className="w-24" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
