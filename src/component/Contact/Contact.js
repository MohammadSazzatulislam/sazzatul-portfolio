import React from "react";
import image from '../../image/form.jpg'
import { FaArrowDown } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center p-5 ">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="w-full lg:w-[700px] md:w-[500px] rounded-md  "
      >
        <h1 className="text-4xl pb-2 text-center uppercase font-bold text-white">
          Contact Us
        </h1>
        <div className="flex flex-col py-10 justify-center items-center ">
          <FaArrowDown className="w-8 h-8 border rounded-full p-1 text-white"></FaArrowDown>
        </div>
        <div class="flex items-center justify-center pb-5">
          <a href="https://form.jotform.com/223442580416452">
            <button
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 uppercase
                 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              click Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
