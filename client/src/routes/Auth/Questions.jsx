import React, { useState  } from "react";
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
            How stressed have you been feeling lately?
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
How distributed has been your sleep schedule lately?
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
How much caring have you been to yourself?
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
How strong have been your self-harming thoughts?
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
          How distracted have you been feeling lately?
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
 Your level of Alchohol/Drugs consumption?
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
How comfortable do you feel around your friends and family?
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
