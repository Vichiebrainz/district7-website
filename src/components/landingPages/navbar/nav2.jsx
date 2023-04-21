import React, { useState, useEffect, useRef } from "react";
import navLogo from "../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyles.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterType, userSelector } from "../../../store/slices/authSlice";
// import { useTransition, animated } from "react-spring";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popoverRef = React.useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // const transitions = useTransition(isOpen, null, {
  //   from: { opacity: 0, transform: "translateY(-10px)" },
  //   enter: { opacity: 1, transform: "translateY(0)" },
  //   leave: { opacity: 0, transform: "translateY(-10px)" },
  // });

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

  const gotoDashboard = () => {
    if (isLandlord) {
      navigate("/landlord/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  const { isLandlord, isLoggedIn } = useSelector(userSelector);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white fixed w-full p-6  z-10 shadow">
      <div className="flex items-center flex-shrink-0  mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <a href="/" className="text-sm font-medium text-gray-900">
            <img src={navLogo} alt="brand logo" className="w-40" />
          </a>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-[#05C002] border-[#05C002] hover:text-[#068903] hover:border-[#068903]">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* {transitions.map(
        ({ item, key, props }) =>
          item && ( */}
      <div
        // key={key}
        // style={props}
        className={`w-full block lg:flex lg:items-center lg:w-auto rounded-[12px] font-header font-medium text-[15px] text-black ${
          isOpen ? "block" : "hidden"
        }`}>
        <div className="flex flex-col md:flex-row">
          {/* <a
            href="#"
            className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8 mb-6  md:mb-0">
            Home
          </a> */}
          <a
            href="/about"
            className="block lg:inline-block lg:mt-0 hover:text-gray-800 mr-8 mb-6 md:mb-0">
            About
          </a>
          <a
            href="/services"
            className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8 mb-6 md:mb-0">
            Services
          </a>
          <a
            href="/contact"
            className="block lg:inline-block lg:mt-0  hover:text-gray-800 mr-8 mb-6 md:mb-0">
            Contact
          </a>
        </div>
        <div className="flex gap-4 w-full justify-center mt-8 md:mt-0  md:justify-end">
          {isLoggedIn ? (
            <button
              className="text-white bg-[#05C002] text-[15px] font-semibold px-3 py-2 rounded"
              onClick={gotoDashboard}>
              Go to dashboard
            </button>
          ) : (
            <>
              <div onClick={() => setShowPopup(!showPopup)}>
                <button className="text-white bg-[#05C002] text-[15px] font-semibold px-3 py-2 rounded">
                  SIGN UP
                </button>
              </div>
              <Link to="/login">
                <button className="text-white bg-[#05C002] text-[15px] font-semibold px-3 py-2 rounded">
                  lOG IN
                </button>
              </Link>
              {showPopup && (
                <div
                  ref={popoverRef}
                  className="bg-white rounded py-2 px-3 text-gray-700 w-[90%] right-[5%] absolute top-60 md:top-12 md:right-0 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] md:w-[400px]">
                  <div className="w-full flex gap-4 p-4 items-center divide-x">
                    <div
                      className="text-center cursor-pointer"
                      onClick={() => handleRegisterType("tenant")}>
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
                      onClick={() => handleRegisterType("lanlord")}>
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
            </>
          )}
        </div>
      </div>
      {/* ) */}
      {/* )} */}
    </nav>
  );
};

export default Navbar;
