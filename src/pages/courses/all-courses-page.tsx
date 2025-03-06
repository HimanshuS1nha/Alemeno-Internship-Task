import CoursesSection from "../../components/ui/courses-section";

const AllCoursesPage = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center w-full h-full pt-8">
      <CoursesSection title="All Courses" courses={[]} />
    </div>
  );
};

export default AllCoursesPage;
