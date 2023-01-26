import React from "react";
import { Outlet } from "react-router-dom";
import LargeDNav from "../component/LargeDNav/LargeDNav";
import SmallDNav from "../component/SmallDNav/SmallDNav";

const Main = () => {
  return (
    <div className="flex  ">
      <div className="hidden lg:block md:block z-40 fixed bottom-0 top-0">
        <LargeDNav></LargeDNav>
      </div>
      <div className="lg:hidden md:hidden fixed bottom-0 z-40 ">
        <SmallDNav></SmallDNav>
      </div>
      <div className=" w-full h-screen ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
