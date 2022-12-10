import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../component/AboutMe/AboutMe";
import Contact from "../component/Contact/Contact";
import Projects from "../component/Projects/Projects";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);

export default router;
