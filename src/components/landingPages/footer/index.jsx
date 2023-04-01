import React from "react";
// import footerLogo from "../../../assets/footerLogo.png";
import footerLogo from "../../../assets/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center p-8">
      <div className=" ">
        <div className="">
          <ul className="w-full grid grid-cols-2 md:grid-cols-4 justify-start items-center md:text-center text-white text-[18px] md:text-[21px] font-header font-semibold md:divide-x-2 my-8">
            <li className="my-2">
              <a href="#">About</a>
            </li>
            <li className="my-2">
              <a href="#">Services</a>
            </li>
            <li className="my-2">
              <a href="#">Companies</a>
            </li>
            <li className="my-2 md:px-8 ">
              <a href="#" className="flex gap-2">
                Privacy policy <span className="hidden md:flex">& Terms</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-[80px] flex flex-col md:flex-row md:items-center justify-between">
          <div className="">
            <img src={footerLogo} alt="" className="w-52" />
            <h2 className="font-header text-base font-normal my-[10px] text-[#ffffffb2]">
              support@district7.com.ng
            </h2>
            <h3 className="font-header text-base font-normal text-[#ffffffb2]">
              +2349065918317
            </h3>
          </div>
          <div className="flex flex-col md:items-end">
            <h2 className="font-header text-[20px] font-semibold my-[24px] md:my-[10px] text-white">
              Follow us
            </h2>
            <ul className="flex items-center gap-3 text-[#05C002]">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/weatdistrict7?t=Vdr_0qs736WxYvBBvrRD1Q&s=09">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/district7/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/weatdistrict7?igshid=YmMyMTA2M2Y=">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[15vh] w-full mt-[20px] border-t-[3px] border-white flex items-center justify-center">
        <h2 className="font-header text-[15px] font-normal text-white/70">
          Copyright @ {new Date().getFullYear()}. All rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
