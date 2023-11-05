/* eslint-disable react/prop-types */

import { contact } from "../../assets/assets";

const Contact = () => {
  return (
    <div className="flex items-center gap-10 justify-center mx-auto py-24 px-16 w-3/4">
      <div className="w-fit">
        <img src={contact} className="w-[600px] mix-blend-screen" alt="" />
      </div>
      <div className="flex flex-col justify-center gap-4 w-2/3">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-extrabold ">Contact Us</h1>
          <h6 className="text-slate-500">
            Our team will get back to you shortly.
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-medium w-fit">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-primary-200/30 rounded-lg px-4 py-2 focus-visible:outline-primary-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-medium w-fit">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-primary-200/30 rounded-lg px-4 py-2 focus-visible:outline-primary-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg font-medium w-fit">
            How can we help you?
          </label>
          <textarea
            rows={3}
            type="text"
            name="message"
            id="message"
            className="bg-primary-200/30 rounded-lg px-4 py-2 focus-visible:outline-primary-600"
          />
        </div>
        <button className="rounded-lg px-16 mt-4 py-3 w-fit bg-primary-700 text-white text-sm hover:bg-primary-800 transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
