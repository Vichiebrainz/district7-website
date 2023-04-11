import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { MdSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { Squash as Hamburger } from "hamburger-react";
import { Twirl as Hamburger } from "hamburger-react";

import { userSelector } from "../store/slices/authSlice";
import { useSelector } from "react-redux";

const MobileNav = ({ avatar }) => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const popoverRef = React.useRef(null);

  const { isLandlord } = useSelector(userSelector);
  let user;

  if (isLandlord) {
    user = "landlord";
  } else {
    user = "user";
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  const handleProfileClick = () => {
    navigate(`/${user}/profile`);
    setOpen(false);
  };
  const handleSettingsClick = () => {
    navigate(`/${user}/settings`);
    setOpen(false);
  };

  const handleLogoutClick = () => {
    navigate(`/${user}/settings?tab=logout`);
    setOpen(false);
  };

  return (
    <nav className="h-16 w-full z-[999] top-0 bg-white shadow-lg fixed px-4 flex items-center justify-between">
      <img src={logo} alt="District 7" className="w-36 object-cover" />
      {/* <div className="flex flex-grow">
        <input />
      </div> */}
      <div className="flex justify-end items-center gap-4 w-full">
        <div>
          <Link to="profile">
            <img
              className="w-8 h-8 rounded-full border-2 border-solid border-[#05C002] object-cover"
              src={avatar}
              alt="User avatar"
            />
          </Link>
        </div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div
              // ref={popoverRef}
              className="bg-white rounded py-2 px-3 text-gray-700 w-fit right-[5%] absolute top-16 md:top-12 md:right-0 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] md:w-[400px]">
              <div className="w-full flex flex-col gap-4 p-4 justify-center divide-x">
                <div
                  className=" cursor-pointer text-black text-[20px] font-header"
                  onClick={handleProfileClick}>
                  Profile
                </div>
                <div
                  className=" cursor-pointer text-black text-[20px] font-header"
                  onClick={handleSettingsClick}>
                  Settings
                </div>
                <div
                  className=" cursor-pointer text-black text-[20px] font-header"
                  onClick={handleLogoutClick}>
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
