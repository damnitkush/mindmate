import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    newsletters: false,
    premium: false,
    match: false,
  });

  function inputChangeHandler(event) {
    const { name, type, value, checked } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitDetails(event) {
    event.preventDefault();
    console.log(formData);

    let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
    data = data.join(" \n");
    alert(data);
  }

  return (
    <form
      action=""
      onSubmit={submitDetails}
      className="md:w-1/2 md:max-w-full rounded-md p-[30px] mx-auto flex flex-col gap-6 "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="gender" className="font-normal text-sm">
          Gender
        </label>

        <select
          name="gender"
          id="gender"
          className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        >
          <option value="null">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>
        </select>
      </div>

      {/* country  - dropdown*/}
      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="font-normal text-sm">
          Country
        </label>

        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={inputChangeHandler}
          className="w-full border focus-visible:outline-primary-700 focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        >
          <option value="india">India</option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
      </div>

      {/* street address  */}
      <div className="flex flex-col gap-2">
        <label htmlFor="streetAddress" className="font-normal text-sm">
          Street Address
        </label>

        <textarea
          name="streetAddress"
          id="streetAddress"
          placeholder="Write Here"
          onChange={inputChangeHandler}
          value={formData.address}
          className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        ></textarea>
      </div>

      {/* city */}
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="font-normal text-sm">
          City
        </label>

        <input
          type="text"
          id="city"
          name="city"
          placeholder="Write Here"
          onChange={inputChangeHandler}
          value={formData.city}
          className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        />
      </div>

      {/* state */}
      <div className="flex flex-col gap-2">
        <label htmlFor="state" className="font-normal text-sm">
          State / Province
        </label>

        <input
          type="text"
          id="state"
          name="state"
          placeholder="Haryana"
          onChange={inputChangeHandler}
          value={formData.state}
          className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        />
      </div>

      {/* zip code */}
      <div className="flex flex-col gap-2">
        <label htmlFor="zipCode" className="font-normal text-sm">
          ZIP / Postal code
        </label>

        <input
          type="number"
          id="zipCode"
          name="zipCode"
          placeholder="124001"
          onChange={inputChangeHandler}
          value={formData.zipCode}
          className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
          required
        />
      </div>

      {/* by mail - checkbox */}
      <div className="mb-4">
        {/* fieldset and legend */}
        <label className="font-normal text-sm">By Email</label>

        <div className="flex items-start gap-4 mt-2">
          <div>
            <input
              type="checkbox"
              id="newsletters"
              name="newsletters"
              onChange={inputChangeHandler}
              checked={formData.newsletters}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="newsletter" className="font-normal text-sm">
              Newsletters
            </label>
            <p className="text-sm text-gray-500">
              Get the latest updates before anyone else
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 ">
          <div>
            <input
              type="checkbox"
              id="premium"
              name="premium"
              onChange={inputChangeHandler}
              checked={formData.premium}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="premium" className="font-normal text-sm">
              Premium Plans
            </label>
            <p className="text-sm text-gray-500">
              Get notified about your MindMate subscription
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div>
            <input
              type="checkbox"
              id="match"
              name="match"
              onChange={inputChangeHandler}
              checked={formData.match}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="match" className="font-normal text-sm">
              Matching Peers
            </label>
            <p className="text-sm text-gray-500">
              Get notified if any peer is matched
            </p>
          </div>
        </div>
      </div>

      <div className="w-full border-primary-200 border-b"></div>

      {/* first name */}

      {/* submit button */}
      <Link
        to="/signup/details/questions"
        className="bg-primary-500 w-fit mx-auto px-16 font-medium text-white py-2  rounded-md hover:bg-primary-700
        transition-all duration-200"
        type="submit"
      >
        Next
      </Link>
    </form>
  );
}
