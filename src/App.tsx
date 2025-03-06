import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import AllCoursesPage from "./pages/courses/all-courses-page";
import CoursePage from "./pages/courses/course-page";

import LoginPage from "./pages/auth/login-page";

import MyCoursesPage from "./pages/dashboard/my-courses-page";

import AuthWrapper from "./components/wrapper/auth-wrapper";
import CoursesPageWrapper from "./components/wrapper/courses-page-wrapper";
import DashboardWrapper from "./components/wrapper/dashboard-wrapper";

import { useUser } from "./hooks/use-user";
import { useMyCourses } from "./hooks/use-my-courses";

const App = () => {
  const user = useUser((state) => state.user);
  const getMyCourses = useMyCourses((state) => state.getMyCourses);

  useEffect(() => {
    if (user) {
      getMyCourses(user.id);
    }
  }, [user]);
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

      <Route
        path="/my-courses"
        element={
          <DashboardWrapper>
            <MyCoursesPage />
          </DashboardWrapper>
        }
      />
    </Routes>
  );
};

export default App;
