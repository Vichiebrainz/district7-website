import React, { useState, useEffect, useRef } from "react";
import navLogo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyles.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setRegisterType } from "../../../store/slices/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popoverRef = React.useRef(null);
  const [showPopup, setShowPopup] = useState(false);

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
  return (
    <>
      <div className="navbar d-flex align-items-center justify-content-center">
        <div className="navbar-main d-flex align-items-center justify-content-between">
          <div className="navbar-brand">
            <a href="#">
              <img src={navLogo} alt="brand logo" />
            </a>
          </div>

          <div className="navbar-link d-flex align-items-center justify-content-between">
            <ul className="d-flex align-items-center ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Agents</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>

            <div className="navbar-buttons d-flex align-items-center relative">
              <div onClick={() => setShowPopup(!showPopup)}>
                <button>SIGN UP</button>
              </div>
              <Link to="/login">
                <button>lOG IN</button>
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
      </div>
      <div className="block bg-white h-48">
        <ul className="flex flex-col items-center ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Agents</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
