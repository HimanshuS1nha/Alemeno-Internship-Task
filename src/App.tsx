import { Route, Routes } from "react-router-dom";

import AllCoursesPage from "./pages/courses/all-courses-page";
import CoursePage from "./pages/courses/course-page";

import LoginPage from "./pages/auth/login-page";

import MyCoursesPage from "./pages/dashboard/my-courses-page";

import AuthWrapper from "./components/wrapper/auth-wrapper";
import CoursesPageWrapper from "./components/wrapper/courses-page-wrapper";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CoursesPageWrapper>
            <AllCoursesPage />
          </CoursesPageWrapper>
        }
      />
      <Route
        path="/course/:id"
        element={
          <CoursesPageWrapper>
            <CoursePage />
          </CoursesPageWrapper>
        }
      />

      <Route
        path="/login"
        element={
          <AuthWrapper>
            <LoginPage />
          </AuthWrapper>
        }
      />

      <Route path="/my-courses" element={<MyCoursesPage />} />
    </Routes>
  );
};

export default App;
