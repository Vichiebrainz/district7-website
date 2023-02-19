import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { DotLoader } from "react-spinners";

import { useSelector, useDispatch } from "react-redux";
import {
  clearState,
  registerLandlord,
  registerUser,
  userSelector,
} from "../store/slices/authSlice";

function Signup() {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const { addToast } = useToasts();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    isLoggedIn,
    registerType,
    isLandlord,
  } = useSelector(userSelector);

  function handleSubmit() {
    registerType == "tenant"
      ? dispatch(
          registerUser({
            email,
            first_name,
            last_name,
            password,
            password2,
            phone_number,
          })
        )
      : dispatch(
          registerLandlord({
            email,
            first_name,
            last_name,
            password,
            password2,
            phone_number,
          })
        );
  }

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      addToast(errorMessage, { appearance: "error", autoDismiss: true });
      dispatch(clearState());
    }

    if (isSuccess) {
      addToast("Account created successfully!", {
        appearance: "success",
        autoDismiss: true,
      });

      dispatch(clearState());

      if (isLandlord) {
        navigate("/landlord/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
  }, [isError, isSuccess, isLandlord]);
  useEffect(() => {
    isLoggedIn && isLandlord && navigate("/landlord/dashboard");
    isLoggedIn && !isLandlord && navigate("/user/dashboard");
  }, [isLoggedIn, isLandlord]);

  return (
    <div className="grid-container grid grid-cols-1 md:grid-cols-2 h-screen px-[30px] md:px-0">
      <div className="form flex flex-col items-center justify-center">
        <div className="form-body w-full max-w-[450px] flex flex-col justify-center pb-[75px]">
          <div className="bg-white font-semibold m-8 text-3xl text-primary-green font-header mb-[81px]">
            <p className="page-title text-[#05C002]">Sign Up</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="firstname font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="firstname">
                  Firstname{" "}
                </label>
              </div>
              <input
                type="name"
                id="firstName"
                className="form-input py-3 mb-[30px]"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className="lastname font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="lastname">
                  Lastname{" "}
                </label>
              </div>
              <input
                type="name"
                id="lastName"
                className="form-input py-3 mb-[30px]"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="phone font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="phone">
                Phone{" "}
              </label>
            </div>
            <input
              type="phone"
              id="phone"
              className="form-input py-3 mb-[30px]"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07012345678"
            />
          </div>
          <div className="email font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="email">
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
            />
          </div>

          <div className="password font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="password">
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
            />
          </div>
          <div className="password font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="password">
                Confirm Password{" "}
              </label>
            </div>
            <input
              className="form-input py-3 mb-[30px]"
              type="password"
              id="confirmPassword"
              value={password2}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
          <div>
            <button
              className="footer p-[22px] text-white text-[18px] font-header font-bold  bg-[#05C002] md:bg-primary-green w-full rounded-[5px]"
              onClick={() => handleSubmit()}
              type="submit"
            >
              {isFetching && <DotLoader color="#fff" size={21} />}
              {!isFetching && "Get started"}
            </button>
          </div>
          <Link to="/login">
            <div className="signup mt-[53px] w-full text-center text-[12px] md:text-base text-gray-700 font-header">
              <p>
                Have an account already?{" "}
                <span className="px-[4px] font-bold text-[#05C002]">
                  Login{" "}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="background-image min-h-screen hidden md:block">
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
export default Signup;
