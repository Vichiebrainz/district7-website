import React, { useEffect, useState } from "react";
import { returnRandomImage } from "../../../helper/randomizeProfilePictures";
import { useSelector, useDispatch } from "react-redux";
import {
  clearState,
  getUser,
  updateUser,
  userSelector,
} from "../../../store/slices/authSlice";
import { DotLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();

  const {
    isFetching,
    isUpdating,
    isUpdateError,
    isUpdated,
    isSuccess,
    isError,
    user,
  } = useSelector(userSelector);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    dispatch(getUser());

    setFirstName(user?.first_name);
    setLastName(user?.last_name);
    setPhone(user?.phone_number);
    setAvatar(user?.avatar);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isUpdateError) {
      toast.error("Something went wrong, please try again!");
      dispatch(clearState());
    }

    if (isUpdated) {
      toast.success("Profile details updated successfully");

      dispatch(clearState());
    }
  }, [isUpdateError, isUpdated]);

  const updateProfile = (e) => {
    e.preventDefault();

    let formData = new FormData(); //formdata object

    formData.append("first_name", first_name); //append the values with key, value pair
    formData.append("last_name", last_name);
    formData.append("phone_number", phone_number);

    dispatch(updateUser(formData));
  };

  const uploadImage = () => {};

  return (
    <div className="p-6 md:p-0">
      <div className="flex flex-col md:flex-row gap-1 items-center max-w-3xl mx-auto my-10 ">
        <div>
          <img
            className="w-[80px] md:w-[160px] h-[80px] md:h-[160px] rounded-full mr-4 border-2 border-solid border-[#05C002]"
            src={user?.avatar}
            alt="User avatar"
          />
        </div>
        <div>
          <h3 className="text-black md:text-[#068903] text-[18px] md:text-[28px] leading-[34.13px] font-semibold font-header mb-2">
            {user?.first_name + " " + user?.last_name}
          </h3>
          <p className="hidden md:flex text-black text-[24px] leading-[29.26px] font-normal font-header mb-0 md:mb-2">
            {user?.is_landlord ? "Agent" : "User"}
          </p>
          {/* <p
            className="text-[#92918F] text-[12px] md:text-[18px] leading-[21.94px] font-normal font-header underline cursor-pointer"
            onClick={uploadImage}
          >
            Edit Profile Picture
          </p> */}
        </div>
      </div>
      <div>
        <div className="max-w-3xl mx-auto mt-10">
          <form onSubmit={updateProfile}>
            <label
              htmlFor="name"
              className="block font-normal font-header text-[#92918F] text-[13px] md:text-[16px] leading-[19.5px] mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05c002]"
              placeholder="James"
              defaultValue={user?.first_name}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label
              htmlFor="name"
              className="block font-normal font-header text-[#92918F] text-[13px] md:text-[16px] leading-[19.5px] mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05c002]"
              placeholder="Edwards"
              defaultValue={user?.last_name}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label
              htmlFor="email"
              className="block font-normal font-header text-[#92918F] text-[13px] md:text-[16px] leading-[19.5px] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05c002]"
              placeholder="yourmail@mail.com"
              defaultValue={user?.email}
              disabled
            />

            <label
              htmlFor="phone_number"
              className="block font-normal font-header text-[#92918F] text-[13px] md:text-[16px] leading-[19.5px] mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05c002]"
              placeholder="+1 123 4567 890"
              defaultValue={user?.phone_number}
              onChange={(event) => setPhone(event.target.value)}
            />

            <button
              type="submit"
              className="button-primary bg-[#05C002] w-full text-white text-[18px] font-header font-semibold leading-[21.94px] p-[20px] rounded-[5px] my-8"
              onClick={updateProfile}
            >
              {isUpdating && <DotLoader color="#fff" size={21} />}
              {!isUpdating && "Update profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
