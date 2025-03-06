import CourseCard from "./course-card";

import type { CourseType } from "../../../types";

const CoursesSection = ({
  courses,
  title,
}: {
  courses: CourseType[];
  title: string;
}) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-indigo-600">{title}</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
    </>
  );
};

export default CoursesSection;
