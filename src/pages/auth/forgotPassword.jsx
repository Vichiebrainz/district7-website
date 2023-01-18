import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../firebase";
import { useToasts } from "react-toast-notifications";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  return (
    <div className="grid-container grid grid-cols-2 h-screen">
      <div className="form flex flex-col items-center justify-center">
        <div className="form-body w-full max-w-[450px] flex flex-col justify-center">
          <div className="bg-white font-semibold m-8 text-3xl text-primary-green font-header">
            <p className="page-title">Forgot password?</p>
          </div>

          <div className="text-gray-700 font-header text-[18px] font-medium mb-6">
            Enter your email to get a link to rest your password
          </div>
          <div className="email font-body">
            {/* <div className="label-wrapper">
                <label className="form-label" htmlFor="email">
                    Email{" "}
                </label>
                </div> */}
            <input
              type="email"
              id="email"
              className="form-input py-3 px-7 mb-[30px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="weatdistrict7@gmail.com"
            />
          </div>

          <div>
            <button
              className="footer p-[22px] text-white bg-primary-green w-full rounded-[5px] font-header"
              onClick={() => sendPasswordReset(email, addToast)}
              type="submit"
            >
              Send reset email
            </button>
          </div>
        </div>
        <Link to="/">
          <div className="signup mt-[53px] w-full text-center text-gray-700 font-header">
            <p>
              Have an account already?{" "}
              <span className="px-[4px] font-bold text-black ">Login</span>
            </p>
          </div>
        </Link>
      </div>
      <div className="background-image h-screen">
        <img className="bg-img w-full h-full" src="/background-image.png"></img>
        <div className="content py-12 lg:py-24 px-20 flex flex-col justify-between h-full">
          <p className="font-header max-w-[418px] text-[50px] leading-[61px] text-white">
            Secure the best accomodations with us
          </p>
          <img src="/district-logo.svg" alt="" className="relative w-[324px]" />
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
