import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaGithub, FaBorderAll } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Details = () => {
  const product = useLoaderData();
  if (!product) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-auto p-5 pb-40  lg:py-5 lg:px-40  md:py-5  ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-5">
        {/* <!-- Description Div --> */}

        <div className="  h-full w-full lg:w-1/2 md:w-1/2 items-center">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
            {product.name}
          </h2>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product.details}
          </p>
          <h2 className="font-bold lg:text-2xl text-xl lg:leading-9 leading-7 text-gray-800 mt-4">
            Technology Use
          </h2>
          <div className=" font-semibold text-md lg:text-lg md:text-md leading-6  mt-4">
            {product.Technology.map((detail, i) => (
              <ul key={i} className="pl-5">
                <li className="list-disc">{detail}</li>
              </ul>
            ))}
          </div>
          <div className="w-full flex justify-center gap-5 items-center  mt-6">
            <a href={product.Client}>
              <button class=" flex gap-1 justify-center items-center  py-1drop-shadow-lg hover:bg-white hover:text-purple-500 hover:bg-gradient-to-r hover:from-white hover:to-white border hover:border hover:border-purple-500  rounded-full px-3 py-1 text-white font-medium text-md bg-gradient-to-r  from-purple-700 to-purple-700 ">
                <FaGithub className=""></FaGithub> Client
              </button>
            </a>
            <a href={product.Server}>
              <button class=" flex gap-1 justify-center items-center  py-1drop-shadow-lg hover:bg-white hover:text-purple-500 hover:bg-gradient-to-r hover:from-white hover:to-white border hover:border hover:border-purple-500  rounded-full px-3 py-1 text-white font-medium text-md bg-gradient-to-r  from-purple-700 to-purple-700">
                <FaGithub className=""></FaGithub> Server
              </button>
            </a>
            <a href={product.Live}>
              <button class=" flex gap-1 justify-center items-center  py-1drop-shadow-lg hover:bg-white hover:text-purple-500 hover:bg-gradient-to-r hover:from-white hover:to-white border hover:border hover:border-purple-500  rounded-full px-3 py-1 text-white font-medium text-md bg-gradient-to-r  from-purple-700 to-purple-700  ">
                <FaBorderAll></FaBorderAll> Live
              </button>
            </a>
          </div>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full h-full  lg:w-1/2 md:w-1/2  flex lg:flex-row flex-col gap-4">
          <div className="h-full w-full flex justify-center  items-center ">
            <img
              className=" border h-[150px] lg:h-[480px] md:h-[300px]  w-full border-blue-500"
              src={product.img}
              alt=""
            />
          </div>
          <div className=" w-full  grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-3">
            {product.smallImg.map((img, i) => (
              <>
                <span key={i} className=" flex  justify-center items-center">
                  <img
                    className="h-full w-full border border-blue-500"
                    src={img}
                    alt=""
                  />
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
