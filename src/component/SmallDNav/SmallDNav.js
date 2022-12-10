import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaProjectDiagram,
  FaMailBulk,
} from "react-icons/fa";

const SmallDNav = () => {
  const [active, setActive] = useState(0);

  const menus = [
    {
      name: "Home",
      icon: (
        <Link to="/">
          <FaHome className="w-7 h-7 text-white"></FaHome>
        </Link>
      ),
      dis: "translate-x-0",
    },
    {
      name: "About",
      icon: (
        <Link to="/about">
          <FaUserTie className="w-7 h-7 text-white "></FaUserTie>
        </Link>
      ),
      dis: "translate-x-16",
    },
    {
      name: "Projects",
      icon: (
        <Link to="/projects">
          <FaProjectDiagram className="w-7 h-7 text-white"></FaProjectDiagram>
        </Link>
      ),
      dis: "translate-x-32",
    },
    {
      name: "Contact",
      icon: (
        <Link to="/contact">
          <FaMailBulk className="w-7 h-7 text-white"></FaMailBulk>
        </Link>
      ),
      dis: "translate-x-48",
    },
  ];

  return (
    <div
      className=" bg-gradient-to-r flex justify-center fixed  z-40 bottom-0 w-full  from-purple-700 to-purple-700 max-h-[5.4rem]
      "
    >
      <ul className="flex relative ">
        <span
          className={`bg-purple-700 duration-500 ${menus[active].dis} border-4 border-purple-100 h-16 w-16 absolute -top-5 rounded-full text-white`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
                  rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
                  rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {menus.map((menu, i) => (
          <li key={i} className="w-16 text-center">
            <Link onClick={() => setActive(i)} className="flex flex-col  pt-6">
              <span
                className={`z-40 flex justify-center  duration-500 ${
                  i === active && "-mt-6"
                }  `}
              >
                {menu.icon}
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-4 font-semibold  text-white  duration-700 opacity-100"
                    : "opacity-0 translate-y-14"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallDNav;
