import CoursesSection from "../../components/ui/courses-section";

import { useMyCourses } from "../../hooks/use-my-courses";

const MyCoursesPage = () => {
  const myCourses = useMyCourses((state) => state.myCourses);
  return (
    <div className="flex flex-col gap-y-8 items-center w-full h-full pt-8">
      <h1 className="text-4xl font-bold text-indigo-600">My Courses</h1>

      <CoursesSection courses={myCourses} markAsCompleted />
    </div>
  );
};

export default MyCoursesPage;
