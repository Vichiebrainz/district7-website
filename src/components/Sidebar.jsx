import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";
import logo from "../assets/brand.png";

const Sidebar = ({ routes }) => {
  const activeLink =
    "flex items-center gap-5 p-[15px] rounded-[5px] text-[18px] font-semibold leading-[24.38px] text-white text-white bg-[#068903] my-8";
  const normalLink =
    "flex items-center gap-5 p-[15px] rounded-lg text-[18px] font-semibold leading-[24.38px] text-black/75 dark:hover:text-black hover:bg-[#068903]/10 my-8";

  return (
    <div className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 fixed top-0 font-header bg-[#068903]/20">
      <>
        <div className="w-full p-7">
          <a href="/">
            <img
              className="w-full h-full object-cover my-5"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div className="px-6">
          <nav className="py-4 px-2">
            {routes.slice(0, 3).map((link) => (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <link.icon fontSize={28} />
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-grow h-full" />
          <footer className="px-2 py-4">
            {routes.slice(3, 4).map((link) => (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <link.icon fontSize={28} />
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </footer>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
