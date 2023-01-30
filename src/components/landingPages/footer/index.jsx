import React from "react";
// import footerLogo from "../../../assets/footerLogo.png";
import footerLogo from "./footerlogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./footerStyles.css";
function Footer() {
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center p-8">
      <div className=" ">
        <div className="">
          <ul className="w-full grid grid-cols-2 md:grid-cols-6 text-center justify-start text-white font-header font-semibold">
            <li className="my-2">
              <a href="#">About</a>
            </li>
            <li className="my-2">
              <a href="#">Services</a>
            </li>
            <li className="my-2">
              <a href="#">Companies</a>
            </li>
            <li className="my-2">
              <a href="#">Privacy policy & Terms</a>
            </li>
          </ul>
        </div>
        <div className="footer-top-2 flex flex-col md:flex-row items-center justify-between">
          <div className="footer-topleft">
            <img src={footerLogo} alt="" />
            <h2>Weatdistrict7@gmail.com</h2>
            <h3>+2348037837313</h3>
          </div>
          <div className="footer-topright d-flex flex-column align-items-end">
            <ul className="footerIcons d-flex align-items-center justify-content-between">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <h2>Follow us</h2>
          </div>
        </div>
      </div>
      <div className="h-[15vh] w-full mt-[20px] border-t-[3px] border-white flex items-center justify-center">
        <h2 className="font-header text-[15px] font-normal text-white/70">
          Copyright @ 2022. All rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
