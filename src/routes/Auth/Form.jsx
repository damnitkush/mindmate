import React, { useState } from "react";

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
    comments: true,
    candidates: false,
    offers: false,
    pushNotifications: "",
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

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);

    let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
    data = data.join(" \n");
    alert(data);
  }

  return (
    <form
      action=""
      onSubmit={submitHandler}
      className="md:w-1/2 md:max-w-full rounded-md p-[30px] mx-auto flex flex-col gap-2 "
    >
      <div>
        <div>
          <label htmlFor="gender" className="font-medium text-sm">
            Gender
          </label>

          <select
            name="gender"
            id="gender"
            className="w-full border border-primary-700 rounded-md p-2 mt-2"
            required
          >
            <option value="india">Male</option>
            <option value="united states">Female</option>
            <option value="canada">Others</option>
          </select>
        </div>

        <br />
        <label htmlFor="email" className="font-medium text-sm">
          Email
        </label>

        <input
          type="email"
          placeholder="himanshurelhan70@gmail.com"
          id="email"
          name="email"
          onChange={inputChangeHandler}
          value={formData.email}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* country  - dropdown*/}
      <div>
        <label htmlFor="country" className="font-medium text-sm">
          Country
        </label>

        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={inputChangeHandler}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        >
          <option value="india">India</option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
      </div>

      {/* street address  */}
      <div>
        <label htmlFor="streetAddress" className="font-medium text-sm">
          Street Address
        </label>

        <textarea
          name="streetAddress"
          id="streetAddress"
          placeholder="Write Here"
          onChange={inputChangeHandler}
          value={formData.address}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        ></textarea>
      </div>

      {/* city */}
      <div>
        <label htmlFor="city" className="font-medium text-sm">
          City
        </label>

        <input
          type="text"
          id="city"
          name="city"
          placeholder="Write Here"
          onChange={inputChangeHandler}
          value={formData.city}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* state */}
      <div>
        <label htmlFor="state" className="font-medium text-sm">
          State / Province
        </label>

        <input
          type="text"
          id="state"
          name="state"
          placeholder="Haryana"
          onChange={inputChangeHandler}
          value={formData.state}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* zip code */}
      <div>
        <label htmlFor="zipCode" className="font-medium text-sm">
          ZIP / Postal code
        </label>

        <input
          type="number"
          id="zipCode"
          name="zipCode"
          placeholder="124001"
          onChange={inputChangeHandler}
          value={formData.zipCode}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* by mail - checkbox */}
      <div className="mb-4">
        {/* fieldset and legend */}
        <label className="font-medium text-sm">By Email</label>

        <div className="flex items-start gap-4 mt-2">
          <div>
            <input
              type="checkbox"
              id="comments"
              name="comments"
              onChange={inputChangeHandler}
              checked={formData.comments}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="comments" className="font-medium text-sm">
              Comments
            </label>
            <p className="text-sm text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mt-2">
          <div>
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              onChange={inputChangeHandler}
              checked={formData.candidates}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="candidates" className="font-medium text-sm">
              Candidates
            </label>
            <p className="text-sm text-gray-500">
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mt-2">
          <div>
            <input
              type="checkbox"
              id="offers"
              name="offers"
              onChange={inputChangeHandler}
              checked={formData.offers}
              className="w-4 h-4 mt-[6px] accent-primary-700"
            />
          </div>
          <div>
            <label htmlFor="offers" className="font-medium text-sm">
              Offers
            </label>
            <p className="text-sm text-gray-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>
      </div>

      {/* push notification - radio */}
      <div className="mb-4">
        <label className="font-medium text-sm">Push Notifications</label>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio1"
            name="pushNotifications"
            value="everything"
            onChange={inputChangeHandler}
            className="w-4 h-4 accent-primary-700"
          />
          <label htmlFor="radio1" className="font-medium text-sm">
            Everything
          </label>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio2"
            name="pushNotifications"
            value="Same as email"
            onChange={inputChangeHandler}
            className="w-4 h-4 accent-primary-700"
          />
          <label htmlFor="radio2" className="font-medium text-sm">
            Same as email
          </label>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio3"
            name="pushNotifications"
            value="No push notifications"
            onChange={inputChangeHandler}
            className="w-4 h-4 accent-primary-700"
          />
          <label htmlFor="radio3" className="font-medium text-sm">
            No push notifications
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full bg-primary-700 border-b"></div>

      <br />
      <br />
      {/* first name */}
      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Can you describe the specific thoughts or emotions that have been
          bothering you recently?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          id="firstName"
          name="firstName"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* last name */}
      <div>
        <label htmlFor="lastName" className="font-medium text-sm">
          Have you noticed any changes in your sleep patterns or appetite
          lately?
        </label>

        <textarea
          type="text"
          placeholder="Write Here"
          id="lastName"
          name="lastName"
          onChange={inputChangeHandler}
          value={formData.lastName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>
      <div>
        <label htmlFor="third" className="font-medium text-sm">
          How would you rate your overall mood on a scale of 1 to 10, with 1
          being extremely low and 10 being extremely high?
        </label>

        <textarea
          type="text"
          placeholder="Relhan"
          id="third"
          name="third"
          onChange={inputChangeHandler}
          value={formData.lastName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="forth" className="font-medium text-sm">
          Have there been any significant life events or stressors that you'd
          like to discuss?
          <textarea
            name="forth"
            id="forth"
            placeholder="Write Here"
            onChange={inputChangeHandler}
            value={formData.address}
            className="w-full border border-primary-700 rounded-md p-2 mt-2"
            required
          ></textarea>
        </label>
      </div>
      {/* email */}

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Are you engaging in any self-care activities or relaxation techniques
          to manage your mental health?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Have you had any thoughts of self-harm or suicide recently?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Are there any specific goals or objectives you'd like to work on in
          therapy?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          How are your relationships with family and friends affecting your
          mental well-being?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Are there any substances (e.g., alcohol, drugs) that you've been using
          to cope with your feelings?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          How would you describe your support system, and do you feel
          comfortable talking to loved ones about your mental health concerns?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Are there any past traumas or unresolved issues from your past that
          are currently affecting you?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Are there any past traumas or unresolved issues from your past that
          are currently affecting you?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>
      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          How would you like to see yourself progress in terms of your mental
          health and overall well-being?
        </label>

        <textarea
          type="text"
          placeholder="write your experience here"
          onChange={inputChangeHandler}
          value={formData.firstName}
          className="w-full border border-primary-700 rounded-md p-2 mt-2"
          required
        />
      </div>
      {/* submit button */}
      <button
        className="bg-primary-500 font-medium text-white py-2 px-4 rounded-md hover:bg-primary-700
        transition-all duration-200"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
