import React from "react";

const Loading = () => {
  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="relative w-5 h-9 animate-spin rounded-full bg-gradient-to-r from-pink-400 via-blue-500 to-pink-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-7 bg-white  rounded-full "></div>
      </div>
    </div>
  );
};

export default Loading;
