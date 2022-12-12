import React from "react";
import { IoNotifications } from "react-icons/io5";

const DashboardNavbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent mb-10">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold font-header leading-[34.13px] text-[28px] tracking-tight">
          Welcome back, Khervie00
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* Navigation links go here */}
        </div>
        <div>
          <img
            className="w-12 h-12 rounded-full mr-4 border-2 border-solid border-[#05C002]"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
        </div>
        <div className="cursor-pointer text-[#05C002] mx-3">
          <IoNotifications fontSize={36} />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
