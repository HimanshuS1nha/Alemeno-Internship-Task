import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Loader from "../../components/ui/loader";
import CoursesSection from "../../components/ui/courses-section";

import { courses } from "../../dummy-data/courses";

const AllCoursesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-courses"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000));

      return { courses };
    },
  });
  if (error) {
    toast.error("Some error occured. Please try again later!");
  }
  return (
    <div className="flex flex-col gap-y-8 items-center w-full h-full pt-8">
      {isLoading ? (
        <Loader />
      ) : (
        <CoursesSection title="All Courses" courses={data?.courses} />
      )}
    </div>
  );
};

export default AllCoursesPage;
