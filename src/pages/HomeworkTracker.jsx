import React from "react";
import {Link} from 'react-router-dom'
import homeworks from "../data/homeworks";

const colorMap = new Map([
  ["HTML", "bg-orange-400"],
  ["CSS", "bg-cyan-400"],
  ["JS", "bg-yellow-400"],
  ["DevOps", "bg-indigo-800"],
]);

function HomeworkTracker() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Homework Tracker</h1>
      <ul className="mx-auto divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-12">
        {homeworks.map(
          ({
            _id,
            title,
            unit,
            completed,
            grade,
            feedback,
            studentMarkedResolved,
            dateSubmitted,
            dateRequired,
            studentFeedback,
          }) => (
            <li
              key={_id}
              className={`p-3 sm:p-4 text-left ${
                completed ? "bg-neutral-400" : colorMap.get(
                unit
              )
              } flex items-center border-black border aspect-square`}
            >
              <Link
                to={`/homeworks/123/${_id}`}
              >
                {title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default HomeworkTracker;
