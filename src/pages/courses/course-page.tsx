import { useParams } from "react-router-dom";

import Button from "../../components/ui/button";
import AccordionItem from "../../components/ui/accordion-item";

import { courses } from "../../dummy-data/courses";

const CoursePage = () => {
  const { id } = useParams() as { id: string };

  const course = courses.find((course) => course.id === parseInt(id));
  return (
    <>
      {course ? (
        <div className="flex flex-col w-full h-full pt-10 gap-y-20">
          <div className="flex flex-col-reverse md:flex-row gap-y-8 gap-x-16 items-center justify-center">
            <div className="flex flex-col items-center md:items-start gap-y-5 w-[90%] md:w-[45%]">
              <p className="text-3xl font-bold text-indigo-600">
                {course.name}
              </p>
              <p className="text-gray-700 text-justify text-sm">
                {course.description}
              </p>

              <div className="flex items-end gap-x-2">
                <p className="text-2xl font-extrabold">
                  ₹ {course.discountedPrice}
                </p>
                <p className="text-sm text-rose-600 line-through">
                  ₹ {course.actualPrice}
                </p>
                <p className="text-rose-600 font-semibold text-lg">
                  (-
                  {Math.ceil(
                    ((course.actualPrice - course.discountedPrice) /
                      course.actualPrice) *
                      100
                  )}
                  % off )
                </p>
              </div>

              <Button>Buy now</Button>
            </div>

            <div className="w-[90%] md:w-[450px] h-[450px] rounded-lg">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center flex-wrap">
            <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
              <p>Duration</p>
              <p className="font-semibold">{course.duration}</p>
            </div>
            <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
              <p>Schedule</p>
              <p className="font-semibold">{course.schedule}</p>
            </div>
            <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
              <p>Location</p>
              <p className="font-semibold">{course.location}</p>
            </div>
            <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
              <p>Prerequisites</p>
              <p className="font-semibold">{course.prerequisites.join(", ")}</p>
            </div>
            <div className="bg-white border border-gray-300 p-4 rounded-lg flex flex-col items-center">
              <p>Enrollment Status</p>
              <p className="font-semibold capitalize">
                {course.enrollmentStatus}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-y-8 gap-x-16 items-center justify-center">
            <div className="w-[90%] md:w-[270px] h-[300px] md:h-[250px] rounded-lg">
              <img
                src={course.instructor.image}
                alt={course.instructor.name}
                className="w-full h-full object-fill rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center md:items-start gap-y-5 w-[90%] md:w-[45%]">
              <p className="text-3xl font-bold text-indigo-600">
                {course.instructor.name}
              </p>
              <p className="text-gray-700 text-justify text-sm">
                {course.instructor.description}
              </p>

              <p className="text-lg font-semibold">
                {course.instructor.experience} years of experience in teaching
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 items-center">
            <p className="text-2xl font-bold">What will you learn?</p>

            <div className="flex flex-col w-[98%] md:w-[70%]">
              {course.syllabus.map((syllabus) => {
                return (
                  <AccordionItem key={syllabus.week} syllabus={syllabus} />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full justify-center">
          <p className="text-rose-600 text-center font-bold">
            Course not found.
          </p>
        </div>
      )}
    </>
  );
};

export default CoursePage;
