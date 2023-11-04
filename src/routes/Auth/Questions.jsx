import React, { useState } from "react";
import { Link } from "react-router-dom";

const Questions = () => {
  const [questions, setQuestions] = useState({
    recentEmotions: "",
    changersInSleepPattern: "",
    lifeEvents: "",
    selfCare: "",
    suicide: "",
    objectives: "",
    relationships: "",
    feelings: "",
    concerns: "",
    traumas: "",
    progress: "",
  });
  function submitQuestions(event) {
    event.preventDefault();
    console.log(questions);

    let data = Object.keys(questions).map(
      (key) => `${key} = ${questions[key]}`
    );
    data = data.join(" \n");
    alert(data);
  }

  function inputChangeHandler(event) {
    const { name, type, value, checked } = event.target;

    setQuestions((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <form
      onSubmit={submitQuestions}
      className="md:w-1/2 md:max-w-full rounded-md p-[30px] mx-auto"
    >
      <div className="mx-auto flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Can you describe the specific thoughts or emotions that have been
            bothering you recently?
          </label>

          <textarea
            type="text"
            id="firstName"
            name="firstName"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        {/* last name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="font-normal text-sm">
            Have you noticed any changes in your sleep patterns or appetite
            lately?
          </label>

          <textarea
            type="text"
            id="lastName"
            name="lastName"
            onChange={inputChangeHandler}
            value={questions.lastName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="forth" className="font-noraml text-sm">
            Have there been any significant life events or stressors that you'd
            like to discuss?
            <textarea
              name="forth"
              id="forth"
              onChange={inputChangeHandler}
              value={questions.address}
              className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
              required
            ></textarea>
          </label>
        </div>
        {/* email */}

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Are you engaging in any self-care activities or relaxation
            techniques to manage your mental health?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Have you had any thoughts of self-harm or suicide recently?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Are there any specific goals or objectives you'd like to work on in
            therapy?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            How are your relationships with family and friends affecting your
            mental well-being?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Are there any substances (e.g., alcohol, drugs) that you've been
            using to cope with your feelings?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            How would you describe your support system, and do you feel
            comfortable talking to loved ones about your mental health concerns?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            Are there any past traumas or unresolved issues from your past that
            are currently affecting you?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-normal text-sm">
            How would you like to see yourself progress in terms of your mental
            health and overall well-being?
          </label>

          <textarea
            type="text"
            onChange={inputChangeHandler}
            value={questions.firstName}
            className="w-full border focus-visible:outline-primary-700 outine-none focus:outline-primary-700 rounded-md p-2 text-sm"
            required
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link
          to="/dashboard"
          className="bg-primary-500 w-fit mx-auto px-16 font-medium text-white py-2  rounded-md hover:bg-primary-700
        transition-all duration-200"
          type="submit"
        >
          Next
        </Link>
      </div>
    </form>
  );
};

export default Questions;
