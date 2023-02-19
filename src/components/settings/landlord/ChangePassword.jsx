import React, { useState, useEffect } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  clearState,
  userSelector,
} from "../../../store/slices/authSlice";
import { DotLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [old_password, setCurrentPassword] = useState("");
  const [password, setNewPassword] = useState("");
  const [password2, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const { isFetching, isSuccess, isError } = useSelector(userSelector);

  const handleChangePassword = () => {
    event.preventDefault();
    dispatch(changePassword({ old_password, password, password2 }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong, please try again!");
      dispatch(clearState());
    }

    if (isSuccess) {
      toast.success(" Password updated successfully");
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div className="my-0  md:my-16 text-black text-[18px] md:text-[24px] leading-[29.26px] font-semibold font-header text-center md:text-left">
        Change Password
      </div>
      <div className="max-w-lg  mt-10 px-6">
        <form>
          <div className="mb-1 md:mb-4 relative ">
            <label
              htmlFor="current-password"
              className="block font-normal font-header text-black/60 text-[14px] md:text-[16px] leading-[19.5px] mb-3"
            >
              Current Password
            </label>
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              id="current-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[12px] md:p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={old_password}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />

            <div className="cursor-pointer">
              {showPassword.currentPassword ? (
                <RiEyeCloseLine
                  size={20}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({ ...showPassword, currentPassword: false })
                  }
                />
              ) : (
                <RiEyeLine
                  size={26}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({ ...showPassword, currentPassword: true })
                  }
                />
              )}
            </div>
          </div>
          <div className="mb-1 md:mb-4 relative ">
            <label
              htmlFor="new-password"
              className="block font-normal font-header text-black/60 text-[14px] md:text-[16px] leading-[19.5px] mb-3"
            >
              New Password
            </label>
            <input
              type={showPassword.newPassword ? "text" : "password"}
              id="new-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[12px] md:p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={password}
              onChange={(event) => setNewPassword(event.target.value)}
            />

            <div className="cursor-pointer">
              {showPassword.newPassword ? (
                <RiEyeCloseLine
                  size={20}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({ ...showPassword, newPassword: false })
                  }
                />
              ) : (
                <RiEyeLine
                  size={26}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({ ...showPassword, newPassword: true })
                  }
                />
              )}
            </div>
          </div>
          <div className="mb-1 md:mb-4 relative ">
            <label
              htmlFor="confirm-new-password"
              className="block font-normal font-header text-black/60 text-[14px] md:text-[16px] leading-[19.5px] mb-3"
            >
              Confirm New Password
            </label>
            <input
              type={showPassword.confirmNewPassword ? "text" : "password"}
              id="confirm-new-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[12px] md:p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={password2}
              onChange={(event) => setConfirmNewPassword(event.target.value)}
            />
            <div className="cursor-pointer">
              {showPassword.confirmNewPassword ? (
                <RiEyeCloseLine
                  size={20}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      confirmNewPassword: false,
                    })
                  }
                />
              ) : (
                <RiEyeLine
                  size={26}
                  color="#868686"
                  className="absolute right-2 top-11 mr-2 mt-1"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      confirmNewPassword: true,
                    })
                  }
                />
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="button-primary bg-[#05C002] w-full text-white text-[18px] font-header font-semibold leading-[21.94px] p-[20px] rounded-[5px] my-4"
              onClick={handleChangePassword}
              disabled={!old_password || !password || !password2}
            >
              {isFetching && <DotLoader color="#fff" size={21} />}
              {!isFetching && "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
