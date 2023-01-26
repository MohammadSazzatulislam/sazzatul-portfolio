import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://sazzatul-portfolio-server.vercel.app/project")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className=" flex flex-wrap gap-4 lg:px-32 lg:py-5 md:px-32 md:py-5 px-5 pb-32 pt-5 w-full justify-center items-center ">
      {data.map((project) => (
        <>
          <div
            key={project._id}
            class="w-auto text-white rounded overflow-hidden shadow-lg"
          >
            <img alt="" class="w-full" src={project.img} />
            <div class="px-6 py-5">
              <div class="font-bold text-xl mb-2">{project.name}</div>
              <p class="text-gray-700 text-base">{project.details}</p>
            </div>
            <div class="px-6 flex justify-around items-center  pb-5">
              <Link to={`/details/${project._id}`}>
                <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 ">
                  <FaClipboardList></FaClipboardList> Details
                </button>
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Projects;
