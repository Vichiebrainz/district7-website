import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { DotLoader } from "react-spinners";

import { useSelector, useDispatch } from "react-redux";
import {
  clearState,
  registerLandlord,
  registerUser,
  setRegisterType,
  userSelector,
} from "../store/slices/authSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import landlord from "../assets/landlord.png";
import tenant from "../assets/renter.png";

import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

const signupSchema = yup.object({
  first_name: yup.string().required("Please Enter your First name"),
  last_name: yup.string().required("Please Enter your Last name"),
  phone_number: yup
    .string()
    .required("Please Enter your WhatsApp phone number"),
  email: yup.string().email().required("Please Enter your password"),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "Should have at least one number"),
  password2: yup
    .string()
    .required("Please re-enter your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Signup() {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [registrationStep, setRegistrationStep] = useState("one");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const gaEventTracker = useAnalyticsEventTracker("Auth");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    isLoggedIn,
    registerType,
    isLandlord,
  } = useSelector(userSelector);

  const onSubmit = async (data) => {
    console.log(data);

    registerType == "tenant"
      ? dispatch(registerUser(data))
      : dispatch(registerLandlord(data));
    gaEventTracker("Account created!");
  };

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
      toast.success("Account created successfully!");
      dispatch(clearState());

      if (isLandlord) {
        navigate("/landlord/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }

    if (isFetching) {
      toast.loading("Creating Account...");
    }
  }, [isError, isSuccess, isFetching, isLandlord]);

  // useEffect(() => {
  //   isLoggedIn && isLandlord && navigate("/landlord/dashboard");
  //   isLoggedIn && !isLandlord && navigate("/user/dashboard");
  // }, [isLoggedIn, isLandlord]);

  const handleRegisterType = (e) => {
    dispatch(setRegisterType(e));
    navigate("/signup");
  };

  const errorMessageStyles =
    "text-[crimson] text-[13px] font-medium font-header mb-6";

  return (
    <div className="grid-container grid grid-cols-1 md:grid-cols-2 h-screen px-[30px] md:px-0">
      {registrationStep === "one" && (
        <div className="step-1 flex flex-col items-center justify-center">
          <div className="w-full md:w-3/4 mx-auto">
            <div className="text-[21px] md:text-[28px] text-black/80 font-semibold font-header mb-8">
              Select account type
            </div>
            <p></p>

            <div>
              <div
                className={`item-card bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-sm rounded-[12px] p-4 flex items-center gap-4 cursor-pointer my-4 border-[2px] border-solid ${
                  registerType === "tenant"
                    ? "border-[#05C002] bg-[#05C002]/10"
                    : "border-none"
                }`}
                onClick={() => handleRegisterType("tenant")}>
                <div className="w-[32px] h-[32px] relative">
                  <img src={tenant} alt="" className="w-full object-cover" />
                </div>
                <div>
                  <div className="text-[12px] md:text-[16px] text-black/80 font-semibold font-header ">
                    Tenant
                  </div>
                  <div className="text-[10px] md:text-[14px] text-black/80 font-light font-header ">
                    Search or find a home
                  </div>
                </div>
              </div>
              <div
                className={`item-card bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-sm rounded-[12px] p-4 flex items-center gap-4 cursor-pointer my-4 border-[2px] border-solid ${
                  registerType === "landlord"
                    ? "border-[#05C002] bg-[#05C002]/10"
                    : "border-none"
                } `}
                onClick={() => handleRegisterType("landlord")}>
                <div className="w-[32px] h-[32px] relative">
                  <img src={landlord} alt="" className="w-full object-cover" />
                </div>
                <div>
                  <div className="text-[12px] md:text-[16px] text-black/80 font-semibold font-header ">
                    Agent
                  </div>
                  <div className="text-[10px] md:text-[14px] text-black/80 font-light font-header ">
                    Post a property
                  </div>
                </div>
              </div>
            </div>

            {registerType && (
              <div className="button mt-24">
                <button
                  className="footer py-4 px-12 text-white text-[18px] font-header font-bold  bg-[#05C002]  w-fit rounded-[5px]"
                  onClick={() => setRegistrationStep("two")}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */}
      {registrationStep === "two" && (
        <div className="step-2">
          <form
            className="form flex flex-col items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}>
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
                    className="form-input py-3 mb-[10px]"
                    placeholder="First name"
                    {...register("first_name", { required: true })}
                  />
                  <p className={errorMessageStyles}>
                    {errors.first_name?.message}
                  </p>
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
                    className="form-input py-3 mb-[10px]"
                    placeholder="Last name"
                    {...register("last_name", { required: true })}
                  />
                  <p className={errorMessageStyles}>
                    {errors.last_name?.message}
                  </p>
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
                  className="form-input py-3 mb-[10px]"
                  placeholder="07012345678"
                  {...register("phone_number", { required: true })}
                />
                <p className={errorMessageStyles}>
                  {errors.phone_number?.message}
                </p>
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
                  className="form-input py-3 mb-[10px]"
                  placeholder="weatdistrict7@gmail.com"
                  {...register("email", { required: true })}
                />
                <p className={errorMessageStyles}>{errors.email?.message}</p>
              </div>

              <div className="password font-body">
                <div className="label-wrapper">
                  <label className="form-label" htmlFor="password">
                    Password{" "}
                  </label>
                </div>
                <input
                  className="form-input py-3 mb-[10px]"
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <p className={errorMessageStyles}>{errors.password?.message}</p>
              </div>
              <div className="password font-body">
                <div className="label-wrapper">
                  <label className="form-label" htmlFor="password">
                    Confirm Password{" "}
                  </label>
                </div>
                <input
                  className="form-input py-3 mb-[10px]"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  {...register("password2", { required: true })}
                />
                <p className={errorMessageStyles}>
                  {errors.password2?.message}
                </p>
              </div>
              <div>
                <button
                  className="footer p-[22px] text-white text-[18px] font-header font-bold  bg-[#05C002] md:bg-primary-green w-full rounded-[5px]"
                  onClick={() => handleSubmit(onsubmit)}
                  type="submit">
                  {isFetching && <DotLoader color="#fff" size={21} />}
                  {!isFetching && "Get started"}
                </button>
              </div>
              <Link to="/login">
                <div className="signup mt-[53px] w-full text-center text-[12px] md:text-base text-gray-700 font-header">
                  <p>
                    Have an account already?
                    <span className="px-[4px] font-bold text-[#05C002]">
                      Login
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </form>
        </div>
      )}
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
