import React from "react";
import image from "../../image/about-image.jpeg";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto lg:flex-row md:flex-row pb-28 lg:py-0 md:py-0">
        <div className="lg:w-1/2 md:w-1/2 w-full h-1/3 p-5  ">
          <h1 className="lg:mt-28 md:mt-28 lg:text-4xl mg:text-3xl text-xl font-bold border-b-2 pb-2 border-green-600">
            <span className="text-purple-700 text-6xl">A</span>bout Me
          </h1>
          <p className="mt-5 font-medium text-lg text-gray-600">
            I like to learn new technology . I am very confident, hard working
            and Dedicated with time management. It talents while offering
            opportunities for ongoing professional growth in exchange for a
            solid work ethic,integrity, commitment to superior performance.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full h-screen ">
          <img
            className="w-full h-screen  "
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 10% 70%, 10% 20%)",
            }}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
