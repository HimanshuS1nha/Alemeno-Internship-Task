import { Route, Routes } from "react-router-dom";

import AllCoursesPage from "./pages/courses/all-courses-page";
import CoursePage from "./pages/courses/course-page";

import LoginPage from "./pages/auth/login-page";

import MyCoursesPage from "./pages/dashboard/my-courses-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCoursesPage />} />
      <Route path="/course/:id" element={<CoursePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/my-courses" element={<MyCoursesPage />} />
    </Routes>
  );
};

export default App;
