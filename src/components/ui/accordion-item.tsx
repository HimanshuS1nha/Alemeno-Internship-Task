import { useState } from "react";
import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react";

import Button from "./button";

import { useMyCourses } from "../../hooks/use-my-courses";

import type { CourseType } from "../../../types";

const AccordionItem = ({
  syllabus,
  purchasedCourse,
}: {
  syllabus: { topic: string; week: number; content: string };
  purchasedCourse?: CourseType & { completed: number[] };
}) => {
  const myCourses = useMyCourses((state) => state.myCourses);
  const setMyCourses = useMyCourses((state) => state.setMyCourses);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col border-b border-gray-300 p-4 gap-y-2">
      <div className="flex justify-between items-center">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-sm text-gray-700">Week {syllabus.week}</p>
          <p className="text-sm sm:text-lg font-semibold">{syllabus.topic}</p>
        </div>

        <div className="cursor-pointer flex gap-x-3 items-center">
          {purchasedCourse &&
            (purchasedCourse.completed.includes(syllabus.week) ? (
              <p className="text-sm text-emerald-600 font-semibold">
                Completed
              </p>
            ) : (
              <Button
                className="p-0 size-8 rounded-full text-xs sm:text-sm"
                onClick={() => {
                  setMyCourses(
                    myCourses.map((myCourse) => {
                      if (myCourse.id === purchasedCourse.id) {
                        const newCompleted = [
                          ...myCourse.completed,
                          syllabus.week,
                        ];

                        return { ...myCourse, completed: newCompleted };
                      }

                      return myCourse;
                    })
                  );
                }}
              >
                <CheckIcon color="white" />
              </Button>
            ))}
          {isOpen ? (
            <ChevronUp
              color="black"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <ChevronDown
              color="black"
              size={20}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && <p className="text-justify">{syllabus.content}</p>}
    </div>
  );
};

export default AccordionItem;
