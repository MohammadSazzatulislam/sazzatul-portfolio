import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../image/logo.png";

const Banner = () => {
  return (
    <div>
      <div className="flex  flex-col mx-auto w-full py-[400px] lg:py-0 md:py-0 h-screen gap-6 justify-center items-center lg:flex-row md:flex-row">
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center">
          <img
            className="lg:w-96 md:w-80 w-72 drop-shadow-2xl border border-purple-500 rounded-full"
            src={logo}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-5">
          <p className="uppercase font-medium text-md">Hi there, I'm </p>
          <h1 className="text-4xl my-4  font-bold ">
            <span className="text-purple-500">Mohammad</span> Sazzatul Islam
          </h1>
          <small>
            A Front-End Web Developer Passionate about creating interactive
            <br />
            applications and experience on the web
          </small>
          <div className="flex mt-4  gap-5 items-center">
            <a href="https://drive.google.com/u/1/uc?id=1HaWWD2z8G-n_uTIdycd5jr5BkPoaH5aJ&export=download">
              <button className=" drop-shadow-lg hover:bg-white hover:text-purple-500 hover:bg-gradient-to-r hover:from-white hover:to-white border hover:border hover:border-purple-500  rounded-full px-4 py-2 text-white font-medium text-md bg-gradient-to-r from-purple-500 to-purple-500">
                Resume
              </button>
            </a>
            <div className=" flex justify-around gap-5 items-center">
              <a href="https://www.linkedin.com/in/mohammad-sazzatul-islam/">
                <FaLinkedinIn className="w-7 h-7 p-1  rounded bg-gradient-to-r drop-shadow-xl from-white to-white text-black"></FaLinkedinIn>
              </a>
              <a href="https://github.com/MohammadSazzatulislam">
                <FaGithub className="w-7 h-7 p-1 bg-gradient-to-r rounded drop-shadow-xl from-white to-white text-black "></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
