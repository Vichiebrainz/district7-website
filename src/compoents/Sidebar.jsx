import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";
import logo from "../assets/brand.png";

const Sidebar = ({ routes }) => {
  //   const handleCloseSideBar = () => {
  //     if (activeMenu !== undefined && screenSize <= 900) {
  //       setActiveMenu(false);
  //     }
  //   };

  const activeLink =
    "flex items-center gap-5 p-[20px] rounded-r-[5px] text-[20px] font-semibold leading-[24.38px] text-white text-white m-0 bg-[#068903] my-10";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[20px] font-medium leading-[24.38px] text-black/60 dark:hover:text-black hover:bg-light-gray m-2 my-10";

  return (
    <div className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 fixed">
      <>
        <div className="w-full p-7  ">
          <a href="/">
            <img className="w-full h-full object-cover" src={logo} alt="" />
          </a>
        </div>
        <div className="mt-10 ">
          {routes.slice(0, 3).map((link) => (
            <NavLink
              to={link.to}
              key={link.name}
              // onClick={handleCloseSideBar}
              // style={({ isActive }) => ({
              //   backgroundColor: isActive ? currentColor : "",
              // })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <link.icon fontSize={33} />
              <span className="capitalize ">{link.name}</span>
            </NavLink>
          ))}

          <div className="absolute bottom-20 w-full">
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
