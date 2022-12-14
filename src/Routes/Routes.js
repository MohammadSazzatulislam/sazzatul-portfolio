import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../component/AboutMe/AboutMe";
import Blog from "../component/Blog/Blog";
import Contact from "../component/Contact/Contact";
import Details from "../component/Details/Details";
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
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/details/:id",
        loader: async ({ params }) =>
          fetch(
            `https://sazzatul-portfolio-server.vercel.app/project/${params.id}`
          ),
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
