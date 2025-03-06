import CourseCard from "./course-card";

import type { CourseType } from "../../../types";

const CoursesSection = ({
  courses,
  markAsCompleted,
}: {
  courses?: CourseType[];
  markAsCompleted?: boolean;
}) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {courses && courses.length > 0 ? (
        courses.map((course) => {
          return (
            <CourseCard
              course={course}
              key={course.id}
              markAsCompleted={markAsCompleted}
            />
          );
        })
      ) : (
        <p className="text-rose-600 text-center font-bold">
          No courses to show.
        </p>
      )}
    </div>
  );
};

export default CoursesSection;
