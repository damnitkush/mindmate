import React from "react";
import Form from "../Auth/Form";
import { Link } from "react-router-dom";
import { logoTransparent } from "../../assets/assets";
import { Footer } from "../../components/main/Footer";

const FormData = () => {
  return (
    <>
      <div className="flex flex-col gap-4 px-16 my-10">
        <Link to="/" className="flex items-center gap-4 ">
          <div className="w-fit rounded-full bg-primary-800">
            <img src={logoTransparent} className="w-14" alt="" />
          </div>
          <span className="text-3xl font-bold text-primary-900">MindMate</span>
        </Link>
        <h1 className="font-bold flex text-5xl justify-center items-center">
          Help us understand you better !
        </h1>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default FormData;
