import React from "react";
// import footerLogo from "../../../assets/footerLogo.png";
import footerLogo from "../../../assets/footerLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./footerStyles.css";
function Footer() {
  return (
    <div className="footer d-flex flex-column align-items-center justify-content-center">
      <div className="footer-top ">
        <div className="footer-top-1">
          <ul className="d-flex align-items-center justify-content-between">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Privacy policy & Terms</a>
            </li>
          </ul>
        </div>
        <div className="footer-top-2 d-flex align-items-center justify-content-between">
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
      <div className="footer-bottom d-flex align-items-center justify-content-center">
        <h2>Copyright @ 2022. All rights reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;
