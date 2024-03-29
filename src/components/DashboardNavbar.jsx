import React from "react";
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { returnRandomImage } from "../helper/randomizeProfilePictures";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";

const DashboardNavbar = ({ user }) => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent mb-16">
      <>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold font-header leading-[34.13px] text-[28px] tracking-tight">
            Welcome back, {user?.first_name}
          </span>
        </div>
        {location.pathname === "/user/dashboard" && (
          <>
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
              <Searchbar />
            </div>
          </>
        )}
      </>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* Navigation links go here */}
        </div>
        <div>
          <Link to="profile">
            <img
              className="w-12 h-12 rounded-full mr-4 border-2 border-solid border-[#05C002]"
              src={user?.avatar}
              alt="User avatar"
            />
          </Link>
        </div>
        <div className="cursor-pointer text-[#05C002] mx-3">
          <IoNotifications fontSize={36} />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
