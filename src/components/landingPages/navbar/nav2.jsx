import React, { useState, useEffect, useRef } from "react";
import navLogo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyles.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setRegisterType } from "../../../store/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popoverRef = React.useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  const handleRegisterType = (e) => {
    dispatch(setRegisterType(e));
    navigate("/signup");
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <a href="/" className="text-sm font-medium text-gray-900">
            <img src={navLogo} alt="brand logo" className="w-[80%]" />
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded text-gray-500 border-none hover:text-gray-800 hover:border-teal-500"
            onClick={handleClick}
          >
            <div id="nav-icon2" className={`${isClicked ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="w-full hidden lg:flex lg:items-center lg:w-auto font-header font-medium text-[15px] text-black">
          <div className="lg:flex-grow">
            <a
              href="#"
              className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8"
            >
              Home
            </a>
            <a
              href="#"
              className="block lg:inline-block lg:mt-0 hover:text-gray-800 mr-8"
            >
              About
            </a>
            <a
              href="#"
              className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8"
            >
              Services
            </a>
            <a
              href="#"
              className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center relative gap-6">
            <div onClick={() => setShowPopup(!showPopup)}>
              <button className="text-white bg-[#05C002] text-[15px] font-semibold px-3 py-2">
                SIGN UP
              </button>
            </div>
            <Link to="/login">
              <button className="text-white bg-[#05C002] text-[15px] font-semibold px-3 py-2">
                lOG IN
              </button>
            </Link>
            {showPopup && (
              <div
                ref={popoverRef}
                className="bg-white rounded py-2 px-3 text-gray-700 absolute top-12 right-0 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] w-[400px]"
              >
                <div className="w-full flex gap-4 p-4 items-center divide-x">
                  <div
                    className="text-center cursor-pointer"
                    onClick={() => handleRegisterType("tenant")}
                  >
                    <div className="text-black text-[24px] font-medium font-header">
                      TENANT
                    </div>
                    <div className="text-black text-[14px] font-normal font-header my-2">
                      Find conducive houses
                    </div>
                    <div className="w-full flex justify-center">
                      <BsArrowRightCircleFill size={24} color="#068903" />
                    </div>
                  </div>
                  <div
                    className="text-center p-2 cursor-pointer"
                    onClick={() => handleRegisterType("lanlord")}
                  >
                    <div className="text-black text-[24px] font-medium font-header">
                      AGENT
                    </div>
                    <div className="text-black text-[14px] font-normal font-header my-2">
                      Rent out Houses with us
                    </div>
                    <div className="w-full flex justify-center">
                      <BsArrowRightCircleFill size={24} color="#068903" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
