import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearState, logout } from "../../../store/slices/authSlice";

const Logout = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  const logoutUser = () => {
    dispatch(logout());
    toast("Logged Out!");
    navigate("/");
  };
  return (
    <div className="flex h-[40vh] items-center justify-center font-header px-8">
      <div className="text-center font-bold">
        <div className="text-[24px] mb-8">Are you sure you want to logout?</div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-8 rounded-lg"
          onClick={logoutUser}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
