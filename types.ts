export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type CourseType = {
  id: number;
  name: string;
  instructor: {
    name: string;
    image: string;
    description: string;
    experience: number;
  };
  description: string;
  enrollmentStatus: "open" | "closed" | "in-progress";
  thumbnail: string;
  actualPrice: number;
  discountedPrice: number;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
  enrolledStudents: Omit<UserType, "password">[];
};
