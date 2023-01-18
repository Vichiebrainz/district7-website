import React from "react";
import logo from "../assets/logo/logo_solid.png";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { returnRandomImage } from "../helper/randomizeProfilePictures";

const MobileNav = () => {
  return (
    <nav className="h-16 w-full z-[999] top-0 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] fixed px-5 flex items-center">
      <div className="w-1/4">
        <img src={logo} width="100%" alt="District 7" />
      </div>
      <div className="flex flex-grow">
        <input />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link to="settings?tab=password">
          <div className="text-[24px] text-black/60">
            <MdSettings />
          </div>
        </Link>
        <div>
          <Link to="profile">
            <img
              className="w-9 h-9 rounded-full mr-4 border-2 border-solid border-[#05C002]"
              src={returnRandomImage()}
              alt="User avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
