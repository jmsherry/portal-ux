import React from "react";
import { useParams } from "react-router-dom";
import homeworks from "../data/homeworks";

function HomeworkListing() {
  // Get By ID from Router and display
  let { hwid } = useParams();
  const hw = homeworks.find(({ _id }) => _id === hwid);
  const {
    _id,
    title,
    unit,
    completed,
    grade,
    // feedback,
    studentMarkedResolved,
    dateSubmitted,
    dateRequired,
    studentFeedback,
  } = hw;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div>
    {/* <p>{JSON.stringify(hw)}</p> */}
      <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
      <dl className="flex justify-center mb-8 text-xl">
        <dt className="mr-4">Completed</dt>
        <dd className="font-bold mr-4 text-green-500">
          {completed ? "true" : "false"}
        </dd>
        <dt className="mr-4">Deadline</dt>
        <dd className="font-bold mr-4 text-green-500">
          {dateRequired.toLocaleDateString("en-GB", options)}
        </dd>
        <dt className="mr-4">Date Submitted</dt>
        <dd className="font-bold mr-4 text-green-500">
          {dateSubmitted.toLocaleDateString("en-GB", options)}
        </dd>
        <dt className="mr-4">Grade</dt>
        <dd className="font-bold mr-4 text-green-500">{grade}</dd>
      </dl>
      <h2 className="text-2xl font-bold text-center mb-4">Feedback</h2>
      <p className="text-center mb-4">{studentFeedback}</p>
      <form className="text-center">
        <div>
        <h2 className="text-2xl font-bold text-center mb-4">Your Feedback</h2>
          <textarea
            name="student-fb"
            id="student-fb"
            cols="30"
            rows="10"
            placeholder="Add your queries and feedback here"
            className="p-4"
          ></textarea>
        </div>
        <div>
          <button type="reset">Reset</button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default HomeworkListing;
