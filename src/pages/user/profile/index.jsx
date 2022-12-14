import React from "react";
import { useForm } from "react-hook-form";
import { returnRandomImage } from "../../../helper/randomizeProfilePictures";

const Profile = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Submit the form data to the server
    console.log(data);
  };

  return (
    <div>
      <div className="flex gap-1 items-center max-w-3xl mx-auto my-10">
        <div>
          <img
            className="w-[160px] h-[160px] rounded-full mr-4 border-2 border-solid border-[#05C002]"
            src={returnRandomImage()}
            alt="User avatar"
          />
        </div>
        <div>
          <h3 className="text-[#068903] text-[28px] leading-[34.13px] font-semibold font-header mb-2">
            Ilegbusi Ayooluwa
          </h3>
          <p className="text-black text-[24px] leading-[29.26px] font-normal font-header mb-2">
            User
          </p>
          <p className="text-[#92918F] text-[18px] leading-[21.94px] font-normal font-header">
            Edit Profile Picture
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-3xl mx-auto mt-10">
          <form>
            <label
              htmlFor="name"
              className="block font-normal font-header text-[#92918F] text-[16px] leading-[19.5px] mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              defaultValue={"Kwesi"}
            />

            <label
              htmlFor="name"
              className="block font-normal font-header text-[#92918F] text-[16px] leading-[19.5px] mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              defaultValue={"Hervie"}
            />

            <label
              htmlFor="email"
              className="block font-normal font-header text-[#92918F] text-[16px] leading-[19.5px] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              defaultValue={"herviek2001@gmail.com"}
            />

            <label
              htmlFor="phone_number"
              className="block font-normal font-header text-[#92918F] text-[16px] leading-[19.5px] mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input w-full mb-6 p-[20px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
              defaultValue={"08180746707"}
            />

            <button
              type="submit"
              className="button-primary uppercase bg-[#068903] w-full text-white text-[18px] font-header font-semibold leading-[21.94px] p-[20px] rounded-[5px] my-8"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
