import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaHome,
  FaUserTie,
  FaProjectDiagram,
  FaMailBulk,
} from "react-icons/fa";

const LargeDNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20"
      } duration-500 h-screen flex flex-col justify-center p-5 pt-8 bg-gradient-to-r  from-purple-700 to-purple-700 relative`}
    >
      <FaChevronLeft
        onClick={() => setOpen(!open)}
        className={`${
          !open && "rotate-180"
        } duration-700 absolute cursor-pointer w-7 h-7 rounded-full -right-4 top-9  border-2 border-green-500`}
      ></FaChevronLeft>
      <div>
        <Link to="/">
          <div className="flex gap-x-4 items-center">
            <div>
              <FaHome
                className={`w-7 h-7 cursor-pointer text-white duration-500`}
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
                className={`w-7 h-7  text-white  cursor-pointer duration-500`}
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
                className={`w-7 h-7  text-white  cursor-pointer duration-500`}
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
                className={`w-7 h-7  text-white  cursor-pointer duration-500`}
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
  );
};

export default LargeDNav;
