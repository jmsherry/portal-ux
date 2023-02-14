import React from "react";
import {Link} from 'react-router-dom'
import course from './../data/course'

const colorMap = new Map([
  ['HTML', 'bg-orange-400'],
  ['CSS', 'bg-cyan-400'],
  ['JS', 'bg-yellow-400'],
  ['DevOps', 'bg-indigo-800'],
])

function CoursePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{course.timescale} {course.title} ({course.tuition})</h1>
      <ul className="mx-auto divide-y divide-gray-200 dark:divide-gray-700 grid grid-cols-12">
          {course.lessons.map(({ _id, title, completed, unit }) => (
            <li key={_id} className={`p-3 sm:p-4 text-left ${completed ? 'bg-neutral-400' : ''} ${colorMap.get(unit)} flex items-center border-black border aspect-square`}>
              <Link to={`/lesson/${title}`} className={unit === 'JS' ? 'text-black' : "text-white"}>{title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default CoursePage;
