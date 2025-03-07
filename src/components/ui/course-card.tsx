import { CalendarDaysIcon, SquareUserRoundIcon } from "lucide-react";
import { Link } from "react-router-dom";

import type { CourseType } from "../../../types";

const CourseCard = ({
  course,
  markAsCompleted,
}: {
  course: CourseType & { completed?: number[] };
  markAsCompleted?: boolean;
}) => {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="bg-white flex flex-col w-[95%] sm:w-[350px] rounded-lg shadow-lg shadow-gray-300 cursor-pointer hover:scale-105 delay-100">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-[200px] rounded-t-lg"
        />

        <div className="flex flex-col gap-y-4 p-4">
          <div className="flex flex-col gap-y-2.5">
            <p className="text-lg font-semibold">{course.name}</p>
            <p className="text-justify text-gray-700 text-sm">
              {course.description.substring(0, 80) + "..."}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-x-1.5 items-center">
              <CalendarDaysIcon size={20} className="text-indigo-600" />
              <p className="text-sm text-indigo-600 ">{course.duration}</p>
            </div>
            <div className="flex gap-x-1.5 items-center">
              <SquareUserRoundIcon size={20} className="text-indigo-600" />
              <p className="text-sm text-indigo-600 ">
                {course.instructor.name}
              </p>
            </div>
          </div>

          {markAsCompleted && (
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-semibold">
                Progress :{" "}
                {Math.ceil(
                  (course.completed!.length / course.syllabus.length) * 100
                )}
                %
              </p>
              <div className="flex items-center">
                <div
                  style={{
                    width: `${Math.ceil(
                      (course.completed!.length / course.syllabus.length) * 100
                    )}%`,
                  }}
                  className="bg-indigo-600 h-1"
                />
                <div
                  style={{
                    width: `${Math.ceil(
                      ((course.syllabus.length - course.completed!.length) /
                        course.syllabus.length) *
                        100
                    )}%`,
                  }}
                  className="bg-gray-300 h-1"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
