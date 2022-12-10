import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaHome,
  FaUserTie,
  FaProjectDiagram,
  FaMailBulk,
} from "react-icons/fa";

const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } duration-500 h-screen flex flex-col justify-center p-5 pt-8 bg-blue-400 relative`}
      >
        <FaChevronLeft
          onClick={() => setOpen(!open)}
          className={`${
            !open && "rotate-180"
          } duration-700 absolute cursor-pointer w-7 h-6 rounded-full -right-3 top-9  border-2 border-blue-500`}
        ></FaChevronLeft>
        <div>
          <Link to="/">
            <div className="flex gap-x-4 items-center">
              <div>
                <FaHome
                  className={`w-7 h-7 cursor-pointer duration-500`}
                ></FaHome>
              </div>
              <h1
                className={`text-white origin-center font-medium text-xl duration-300  ${
                  !open && "scale-0"
                } `}
              >
                Home
              </h1>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex mt-6 gap-x-4 items-center">
              <div>
                <FaUserTie
                  className={`w-7 h-7 cursor-pointer duration-500`}
                ></FaUserTie>
              </div>
              <h1
                className={`text-white origin-center font-medium text-xl duration-300  ${
                  !open && "scale-0"
                } `}
              >
                About Me
              </h1>
            </div>
          </Link>
          <Link to="/projects">
            <div className="flex  mt-6 gap-x-4 items-center">
              <div>
                <FaProjectDiagram
                  className={`w-7 h-7 cursor-pointer duration-500`}
                ></FaProjectDiagram>
              </div>
              <h1
                className={`text-white origin-center font-medium text-xl duration-300  ${
                  !open && "scale-0"
                } `}
              >
                Projects
              </h1>
            </div>
          </Link>
          <Link to="/contact">
            <div className="flex  mt-6 gap-x-4 items-center">
              <div>
                <FaMailBulk
                  className={`w-7 h-7 cursor-pointer duration-500`}
                ></FaMailBulk>
              </div>
              <h1
                className={`text-white origin-center font-medium text-xl duration-300  ${
                  !open && "scale-0"
                } `}
              >
                Contact
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
