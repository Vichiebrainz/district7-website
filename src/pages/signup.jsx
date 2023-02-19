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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const { addToast } = useToasts();
  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  // function handleSubmit() {
  //   registerType == "tenant"
  //     ? dispatch(
  //         registerUser({
  //           email,
  //           first_name,
  //           last_name,
  //           password,
  //           password2,
  //           phone_number,
  //         })
  //       )
  //     : dispatch(
  //         registerLandlord({
  //           email,
  //           first_name,
  //           last_name,
  //           password,
  //           password2,
  //           phone_number,
  //         })
  //       );
  // }

  const onSubmit = async (data) => {
    console.log(data);

    registerType == "tenant"
      ? dispatch(registerUser(data))
      : dispatch(registerLandlord(data));
  };

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

  const errorMessageStyles =
    "text-[crimson] text-[13px] font-medium font-header mb-6";

  return (
    <div className="grid-container grid grid-cols-1 md:grid-cols-2 h-screen px-[30px] md:px-0">
      <form
        className="form flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              <p className={errorMessageStyles}>{errors.first_name?.message}</p>
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
              <p className={errorMessageStyles}>{errors.last_name?.message}</p>
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
            <p className={errorMessageStyles}>{errors.phone_number?.message}</p>
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
            <p className={errorMessageStyles}>{errors.password2?.message}</p>
          </div>
          <div>
            <button
              className="footer p-[22px] text-white text-[18px] font-header font-bold  bg-[#05C002] md:bg-primary-green w-full rounded-[5px]"
              onClick={() => handleSubmit(onsubmit)}
              type="submit"
            >
              {isFetching && <DotLoader color="#fff" size={21} />}
              {!isFetching && "Get started"}
            </button>
          </div>
          <Link to="/login">
            <div className="signup mt-[53px] w-full text-center text-[12px] md:text-base text-gray-700 font-header">
              <p>
                Have an account already?
                <span className="px-[4px] font-bold text-[#05C002]">Login</span>
              </p>
            </div>
          </Link>
        </div>
      </form>
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
