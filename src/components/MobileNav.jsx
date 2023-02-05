import React from "react";
import logo from "../assets/logo/logo_solid.png";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNav = ({ avatar }) => {
  return (
    <nav className="h-16 w-full z-[999] top-0 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] fixed px-4 flex items-center justify-between">
      <div className="flex w-1/3">
        <img src={logo} alt="District 7" className="w-full object-cover" />
      </div>
      {/* <div className="flex flex-grow">
        <input />
      </div> */}
      <div className="flex justify-end items-center gap-4 w-full">
        {/* <Link to="settings">
          <div className="text-[22px] text-black/60">
            <MdSettings />
          </div>
        </Link> */}
        <div>
          <Link to="profile">
            <img
              className="w-8 h-8 rounded-full border-2 border-solid border-[#05C002] object-cover"
              src={avatar}
              alt="User avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
