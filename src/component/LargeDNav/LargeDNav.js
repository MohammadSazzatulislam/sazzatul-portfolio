import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaHome,
  FaUserTie,
  FaProjectDiagram,
  FaMailBulk,
  FaBlog,
} from "react-icons/fa";

const LargeDNav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div
      className={` ${
        open ? "w-72 " : "w-20 "
      } duration-500 h-full top-0 relative flex flex-col justify-center p-5 pt-8 
      bg-gradient-to-r  from-purple-700 to-purple-700 `}
    >
      <FaChevronLeft
        onClick={() => setOpen(!open)}
        className={`${
          !open && "rotate-180"
        } duration-700 absolute cursor-pointer w-7 h-7 rounded-full -right-4 top-9  border-2 border-green-500`}
      ></FaChevronLeft>
      <div>
        <Link to="/" onClick={() => setActive(1)}>
          <div className="flex gap-x-4 items-center">
            <div>
              <FaHome
                className={`w-7 h-7 cursor-pointer ${
                  active === 1 && "text-pink-500"
                } text-white  duration-500`}
              ></FaHome>
            </div>
            <h1
              className={`text-white origin-center hover:text-pink-500 font-medium text-xl duration-300  ${
                !open && "scale-0"
              } `}
            >
              Home
            </h1>
          </div>
        </Link>
        <Link to="/about" onClick={() => setActive(2)}>
          <div className="flex mt-6 gap-x-4 items-center">
            <div>
              <FaUserTie
                className={`w-7 h-7  ${
                  active === 2 && "text-pink-500"
                } text-white hover:text-pink-500  cursor-pointer duration-500`}
              ></FaUserTie>
            </div>
            <h1
              className={`text-white origin-center hover:text-pink-500 font-medium text-xl duration-300  ${
                !open && "scale-0"
              } `}
            >
              About Me
            </h1>
          </div>
        </Link>
        <Link to="/projects" onClick={() => setActive(3)}>
          <div className="flex  mt-6 gap-x-4 items-center">
            <div>
              <FaProjectDiagram
                className={`w-7 h-7  ${
                  active === 3 && "text-pink-500"
                } text-white hover:text-pink-500  cursor-pointer duration-500`}
              ></FaProjectDiagram>
            </div>
            <h1
              className={`text-white origin-center hover:text-pink-500 font-medium text-xl duration-300  ${
                !open && "scale-0"
              } `}
            >
              Projects
            </h1>
          </div>
        </Link>
        <Link to="/contact" onClick={() => setActive(4)}>
          <div className="flex  mt-6 gap-x-4 items-center">
            <div>
              <FaMailBulk
                className={`w-7 h-7  ${
                  active === 4 && "text-pink-500"
                } text-white hover:text-pink-500  cursor-pointer duration-500`}
              ></FaMailBulk>
            </div>
            <h1
              className={`text-white origin-center hover:text-pink-500 font-medium text-xl duration-300  ${
                !open && "scale-0"
              } `}
            >
              Contact
            </h1>
          </div>
        </Link>
        <Link to="/blog" onClick={() => setActive(!false)}>
          <div className="flex  mt-6 gap-x-4 items-center">
            <div>
              <FaBlog
                className={`w-7 h-7  ${
                  active === true && "text-pink-500"
                } text-white hover:text-pink-500  cursor-pointer duration-500`}
              ></FaBlog>
            </div>
            <h1
              className={`text-white origin-center hover:text-pink-500 font-medium text-xl duration-300  ${
                !open && "scale-0"
              } `}
            >
              Blog
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LargeDNav;
