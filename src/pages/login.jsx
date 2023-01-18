import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useToasts } from "react-toast-notifications";
import { DotLoader } from "react-spinners";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const { addToast } = useToasts();

  let navigate = useNavigate();

  function handleSubmit() {
    logInWithEmailAndPassword(email, password, addToast);
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/user/dashboard");
  }, [user, loading]);

  function handleInputChange() {}
  return (
    <div className="grid-container grid grid-cols-2 h-screen">
      <div className="form flex flex-col items-center justify-center">
        <div className="form-body w-full max-w-[450px] flex flex-col justify-center">
          <div className="bg-white font-semibold m-8 text-3xl text-primary-green font-header">
            <p className="page-title">Log in</p>
          </div>
          <div
            className="border border-gray-400 py-3 px-7 rounded-[5px] flex items-center gap-4 mb-4 font-header font-medium cursor-pointer"
            onClick={() => signInWithGoogle(addToast)}
          >
            <img src="/google.svg" alt="google icon" />
            <p>Log in with Google</p>
          </div>
          <div>
            <p className="text-center mb-4">OR</p>
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
              className="form-input py-3 px-7 mb-[30px]"
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
              className="form-input py-3 px-7 mb-[30px]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <button
              className="footer p-[22px] text-white bg-primary-green w-full rounded-[5px]"
              onClick={() => handleSubmit()}
              type="submit"
            >
              {loading && <DotLoader color="#fff" fontSize={12} />}
              Proceed
            </button>
          </div>
        </div>
        <Link to="/signup">
          <div className="signup mt-[53px] w-full text-center text-gray-700 font-header">
            <p>
              Don’t have an account yet?{" "}
              <span className="px-[8px] font-bold text-black ">Sign up</span>
            </p>
          </div>
        </Link>
        <Link to="/auth/forgot-password">
          <div className="signup mt-2 w-full text-center text-gray-500 text-[13px] font-header underline">
            <p>Forgot password? </p>
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
export default Login;
