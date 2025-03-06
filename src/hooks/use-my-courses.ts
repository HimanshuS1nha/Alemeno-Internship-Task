import { create } from "zustand";

import { courses } from "../dummy-data/courses";

import type { CourseType } from "../../types";

type UseMyCoursesType = {
  myCourses: (CourseType & { completed: number[] })[];
  getMyCourses: (userId: number) => void;
  setMyCourses: (myCourses: (CourseType & { completed: number[] })[]) => void;
};

export const useMyCourses = create<UseMyCoursesType>((set) => ({
  myCourses: [],
  getMyCourses: (userId) => {
    const myCourses = localStorage.getItem("my-courses");
    if (myCourses) {
      set({ myCourses: JSON.parse(myCourses) });
    } else {
      const myCourses = courses
        .filter((courses) =>
          courses.enrolledStudents.find((student) => student.id === userId)
        )
        .map((course) => ({ ...course, completed: [] }));

      localStorage.setItem("my-courses", JSON.stringify(myCourses));
      set({
        myCourses,
      });
    }
  },
  setMyCourses: (myCourses) => {
    localStorage.setItem("my-courses", JSON.stringify(myCourses));
    set({ myCourses });
  },
}));
