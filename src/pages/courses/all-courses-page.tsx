import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Loader from "../../components/ui/loader";
import CoursesSection from "../../components/ui/courses-section";

import { useMyCourses } from "../../hooks/use-my-courses";

import { courses } from "../../dummy-data/courses";

const AllCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const myCourses = useMyCourses((state) => state.myCourses);

  const { data, isLoading, error } = useQuery({
    queryKey: ["get-courses"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000));

      return {
        courses: courses.filter(
          (course) => !myCourses.find((myCourse) => myCourse.id === course.id)
        ),
      };
    },
  });
  if (error) {
    toast.error("Some error occured. Please try again later!");
  }

  const filteredCourses = data?.courses.filter((course) =>
    searchQuery === ""
      ? true
      : course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-y-8 items-center w-full h-full pt-8">
      <h1 className="text-4xl font-bold text-indigo-600">All Courses</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <input
            placeholder="Search course by name or instructor name..."
            className="border border-gray-300 bg-white p-2 rounded-lg w-[98%] lg:w-[85%]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CoursesSection courses={filteredCourses} />
        </>
      )}
    </div>
  );
};

export default AllCoursesPage;
