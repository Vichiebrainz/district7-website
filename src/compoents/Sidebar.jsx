import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";

const navLinks = [
  {
    name: "Dashboard",
    to: "/user",
    icon: MdDashboard,
  },
  {
    name: "Explore",
    to: "explore",
    icon: MdTravelExplore,
  },
  {
    name: "Connect",
    to: "connect",
    icon: MdTravelExplore,
  },
  {
    name: "Settings",
    to: "settings",
    icon: MdTravelExplore,
  },
];

const Sidebar = () => {
  //   const handleCloseSideBar = () => {
  //     if (activeMenu !== undefined && screenSize <= 900) {
  //       setActiveMenu(false);
  //     }
  //   };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-r-[5px] text-[20px] font-semibold leading-[24.38px] text-white text-white m-0 bg-[#068903]";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[20px] font-medium leading-[24.38px] text-black/60 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <>
        <div className="mt-10 ">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.name}
              // onClick={handleCloseSideBar}
              // style={({ isActive }) => ({
              //   backgroundColor: isActive ? currentColor : "",
              // })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <link.icon fontSize={30} />
              <span className="capitalize ">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
