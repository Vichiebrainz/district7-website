import React, { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="my-16 text-black text-[24px] leading-[29.26px] font-semibold font-header">
        Change Password
      </div>
      <div className="max-w-lg  mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative ">
            <label
              htmlFor="current-password"
              className="block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3"
            >
              Current Password
            </label>
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              id="current-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={currentPassword}
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
          <div className="mb-4 relative">
            <label
              htmlFor="new-password"
              className="block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3"
            >
              New Password
            </label>
            <input
              type={showPassword.newPassword ? "text" : "password"}
              id="new-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              value={newPassword}
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
          <div className="mb-4 relative">
            <label
              htmlFor="confirm-new-password"
              className="block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3"
            >
              Confirm New Password
            </label>
            <input
              type={showPassword.confirmNewPassword ? "text" : "password"}
              id="confirm-new-password"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              value={confirmNewPassword}
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
              className="button-primary uppercase bg-[#068903] w-full text-white text-[18px] font-header font-semibold leading-[21.94px] p-[20px] rounded-[5px] my-4"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
