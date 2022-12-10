import React from "react";
import { Outlet } from "react-router-dom";
import LargeDNav from "../component/LargeDNav/LargeDNav";
import SmallDNav from "../component/SmallDNav/SmallDNav";

const Main = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block md:block">
        <LargeDNav></LargeDNav>
      </div>
      <div className="lg:hidden md:hidden">
        <SmallDNav></SmallDNav>
      </div>
      <div className=" w-full h-screen bg-gradient-to-r  from-purple-50 to-purple-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
