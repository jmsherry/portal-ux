import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CoursePage from "./pages/CoursePage";
import GlossaryPage from "./pages/GlossaryPage";
import GlossaryTermPage from "./pages/GlossaryTermPage";
import HomeworkTracker from "./pages/HomeworkTracker";
import HomeworkListing from "./pages/HomeworkListing";
import LessonPage from "./pages/LessonPage";
import Layout from "./components/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/glossary",
    element: <Layout><GlossaryPage /></Layout>,
  },
  {
    path: "/glossary/:term",
    element: <Layout><GlossaryTermPage /></Layout>,
  },
  {
    path: "/course",
    element: <Layout><CoursePage /></Layout>,
  },
  {
    path: "/lesson/:title?",
    element: <Layout><LessonPage /></Layout>,
  },
  {
    path: "/homework-tracker",
    element:<Layout><HomeworkTracker /></Layout>,
  },
  {
    path: "/homeworks/:studentid/:hwid",
    element:<Layout><HomeworkListing /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
