import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdDashboard, MdTravelExplore, MdSettings } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { userSelector } from "../store/slices/authSlice";

const Sidebar = ({ routes }) => {
  const navigate = useNavigate();

  const { isLandlord } = useSelector(userSelector);
  let user;

  if (isLandlord) {
    user = "landlord";
  } else {
    user = "user";
  }

  const activeLink =
    "flex items-center gap-5 p-[15px] rounded-[5px] text-[18px] font-semibold leading-[24.38px] text-white text-white bg-[#068903] my-8";
  const normalLink =
    "flex items-center gap-5 p-[15px] rounded-lg text-[18px] font-semibold leading-[24.38px] text-black/75 dark:hover:text-black hover:bg-[#068903]/10 my-8";

  return (
    <div className="ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 fixed  top-0 font-header bg-[#068903]/20  shadow-[4px_0  px_rgba(0,0,0,0.35)]">
      <>
        <div className="w-full p-7">
          <a href="/">
            <img className="h-full object-cover my-5 w-52" src={logo} alt="" />
          </a>
        </div>
        <div className="px-6 relative">
          <nav className="py-4 px-2">
            {routes.map((link) => (
              <NavLink
                to={link.to}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                <link.icon fontSize={28} />
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-grow h-24 w-full" />

          <div
            className={`${activeLink} w-full !bg-[crimson] text-white mb-0 my-0 cursor-pointer flex items-center gap-5 `}
            onClick={() => navigate(`/${user}/settings?tab=logout`)}>
            <RiLogoutBoxRFill />
            <span className="capitalize">Logout</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
