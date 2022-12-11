import React from "react";
import { FaGithub, FaBorderAll, FaClipboardList } from "react-icons/fa";
import art from "../../image/Art.PNG";
import watch from "../../image/watch.PNG";
import it from "../../image/it.PNG";

const Projects = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-4 justify-center items-center lg:p-5 md:p-5 pt-8 pb-28">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img alt="" class="w-full" src={watch} />
        <div class="px-6 py-5">
          <div class="font-bold text-xl mb-2">Watches Resale Warehouse</div>
          <p class="text-gray-700 text-base">
            This is a Used Product Resale (SPA) application . And fully
            responsive (mobile, tablet dextop first approach).And also used
            payment getway system and firebase login system. And use Admin
            dashboard.
          </p>
        </div>
        <div class="px-6 flex justify-around items-center  pb-5">
          <a href="https://github.com/MohammadSazzatulislam/watches-resale-warehouse-client">
            <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ">
              <FaGithub className=""></FaGithub> Github
            </button>
          </a>
          <a href="https://watches-resale-warehouse.web.app/">
            <button class=" flex gap-1 justify-center items-center text-teal-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  ">
              <FaBorderAll></FaBorderAll> Demo
            </button>
          </a>

          <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 ">
            <FaClipboardList></FaClipboardList> Details
          </button>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img alt="" class="w-full" src={art} />
        <div class="px-6 py-5">
          <div class="font-bold text-xl mb-2">Art Of Defensee</div>
          <p class="text-gray-700 text-base">
            This website build a traning for Martial Arts. And fully responsive
            (mobile, tablet dextop first approach). And you can also full image
            after clicked services image.also use Google sign in method.
          </p>
        </div>
        <div class="px-6 flex justify-around items-center  pb-5">
          <a href="https://github.com/MohammadSazzatulislam/Art-Of-Defence-client">
            <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ">
              <FaGithub className=""></FaGithub> Github
            </button>
          </a>
          <a href="https://art-of-defensee.web.app/">
            <button class=" flex gap-1 justify-center items-center text-teal-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  ">
              <FaBorderAll></FaBorderAll> Demo
            </button>
          </a>

          <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 ">
            <FaClipboardList></FaClipboardList> Details
          </button>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img alt="" class="w-full" src={it} />
        <div class="px-6 py-5">
          <div class="font-bold text-xl mb-2">It The Future</div>
          <p class="text-gray-700 text-base">
            This website build a learning for web technologies. And fully
            responsive (mobile, tablet dextop first approach). And you can also
            download courses details.also use Google sign in method and github
            sign in method.
          </p>
        </div>
        <div class="px-6 flex justify-around items-center  pb-5">
          <a href="https://github.com/MohammadSazzatulislam/It-The-Future-client">
            <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ">
              <FaGithub className=""></FaGithub> Github
            </button>
          </a>
          <a href="https://it-the-future.web.app/">
            <button class=" flex gap-1 justify-center items-center text-teal-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  ">
              <FaBorderAll></FaBorderAll> Demo
            </button>
          </a>

          <button class=" flex gap-1 justify-center items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 ">
            <FaClipboardList></FaClipboardList> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
