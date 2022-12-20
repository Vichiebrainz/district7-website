import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";
import logo from "../assets/brand.png";

const Sidebar = ({ routes }) => {
  const activeLink =
    "flex items-center gap-5 p-[20px] rounded-[5px] text-[20px] font-semibold leading-[24.38px] text-white text-white m-0 bg-[#068903] my-10";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[20px] font-medium leading-[24.38px] text-black/60 dark:hover:text-black hover:bg-light-gray m-2 my-10";

  return (
    <div className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 fixed top-0 font-header bg-[#068903]/20">
      <>
        <div className="w-full p-7  ">
          <a href="/">
            <img
              className="w-full h-full object-cover my-6"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="mt-10 px-6">
          {routes.slice(0, 3).map((link) => (
            <NavLink
              to={link.to}
              key={link.name}
              // style={({ isActive }) => ({
              //   backgroundColor: isActive ? currentColor : "",
              // })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <link.icon fontSize={33} />
              <span className="capitalize ">{link.name}</span>
            </NavLink>
          ))}

          <div className="absolute bottom-20 w-full px-6">
            {routes.slice(3, 4).map((link) => (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <link.icon fontSize={33} />
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
