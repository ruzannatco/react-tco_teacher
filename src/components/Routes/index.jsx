import { Route, Routes } from "react-router-dom";
import { NotFound404Page } from "../../pages/404";
import { AboutPage } from "../../pages/AboutMe";
import { ContactPage } from "../../pages/Contact";
import { Login } from "../../pages/Login";
import { ProjectPage } from "../../pages/Project";
import { Registration } from "../../pages/Register";
import { SingleTask } from "../../pages/SingleTask";

export const RoutesComponent = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path="/" element={<AboutPage />} />
      <Route path="project" element={<ProjectPage />} />
      <Route path="/project/:taskId" element={<SingleTask />} />

      {/* Public Routes */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound404Page />} />
    </Routes>
  );
};
