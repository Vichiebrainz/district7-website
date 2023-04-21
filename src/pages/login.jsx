import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { DotLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { clearState, loginUser, userSelector } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const gaEventTracker = useAnalyticsEventTracker("Auth");

  const {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    isLoggedIn,
    isLandlord,
  } = useSelector(userSelector);

  function handleSubmit() {
    dispatch(loginUser({ email, password }));
    gaEventTracker("user logged in to account");
    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://api.district7.com.ng/api/auth/login/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Authorization: "Bearer your-token",
    //       // add any other headers you need here
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({ email, password }), // replace data with the data you want to send
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // handle the response data here
    //   })
    //   .catch((error) => {
    //     // handle any errors here
    //   });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      toast.success("Logged In!");

      dispatch(clearState());

      if (isLandlord) {
        navigate("/landlord/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }

    // if (isFetching) {
    //   const loading = toast.loading("Logging in...");
    // } else {
    //   toast.dismiss(loading);
    // }
  }, [isError, isSuccess, isLandlord, isFetching]);

  // useEffect(() => {
  //   isLoggedIn && isLandlord && navigate("/landlord/dashboard");
  //   isLoggedIn && !isLandlord && navigate("/user/dashboard");
  // }, [isLoggedIn, isLandlord]);

  return (
    <div className="grid-container grid grid-cols-1 lg:grid-cols-2 h-screen px-[30px] md:px-0 ">
      <nav className="fixed p-5">
        <a href="/">
          <img src="/district-logo.svg" className="w-40 inline" />
        </a>
      </nav>
      <div className="form flex flex-col items-center justify-center font-header">
        <div className="form-body w-full max-w-[450px] flex flex-col justify-center">
          <div className="bg-white font-semibold m-8 text-3xl text-primary-green font-header">
            <p className="page-title text-[#05C002]">Log in</p>
          </div>
          <div className="border border-black/30 py-3 px-7 rounded-[10px] flex items-center gap-4 mb-4 font-header font-medium cursor-pointer text-[#333333]">
            <img src="/google.svg" alt="google icon" />
            <p>Log in with Google</p>
          </div>
          <div>
            <p className="text-center mb-4 text-[12px] md:text-base">OR</p>
          </div>
          <div className="email">
            <div className="label-wrapper">
              <label
                className="form-labe text-[14px] md:text-[16px]"
                htmlFor="email">
                Email{" "}
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="form-input py-3 mb-[30px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="weatdistrict7@gmail.com"
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="password ">
            <div className="label-wrapper">
              <label
                className="form-labe text-[14px] md:text-[16px]"
                htmlFor="password">
                Password{" "}
              </label>
            </div>
            <input
              className="form-input py-3 mb-[30px]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <button
              className="footer p-[22px] text-white font-bold bg-[#05C002] md:bg-primary-green w-full rounded-[5px]"
              onClick={() => handleSubmit()}
              type="submit"
              disabled={isFetching}>
              {isFetching && <DotLoader color="#fff" size={21} />}
              {!isFetching && "Proceed"}
            </button>
          </div>
        </div>
        <Link to="/signup">
          <div className="signup mt-[53px] w-full text-center text-[12px] md:text-base text-gray-700 font-header">
            <p>
              Don’t have an account yet?{" "}
              <span className="px-[4px] font-bold text-[#05C002]">Sign up</span>
            </p>
          </div>
        </Link>
        <Link to="/auth/forgot-password">
          <div className="signup mt-2 w-full text-center text-gray-500 text-[13px] font-header underline">
            <p>Forgot password? </p>
          </div>
        </Link>
      </div>
      <div className="background-image h-screen hidden lg:block">
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
export default Login;
