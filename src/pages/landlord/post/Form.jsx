import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProperty,
  clearState,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DotLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
    uploaded_images: yup.mixed().required("Images are required"),
  })
  .required();

export default function Form() {
  const dispatch = useDispatch();

  const [picture, setPicture] = useState(null);

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isAdding,
    isAdded,
    isAddedError,
    errorMessage,
    isLoggedIn,
    isLandlord,
  } = useSelector(propertySelector);

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("uploaded_images", picture);
    formData.append("is_public", true);

    dispatch(addProperty(formData));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isAddedError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isAdded) {
      toast.success("Property added successfully");

      dispatch(clearState());
    }
  }, [isAdded, isAddedError]);

  const labelStyles =
    "block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3";

  const inputStyles =
    "border border-[#92918F] border-solid form-input mb-1 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05C002] md:focus:outline-[#068903]";

  const errorMessageStyles =
    "text-[crimson] text-[13px] font-medium font-header mb-6";

  console.log(getValues("title"));

  return (
    <form className="md:px-32 w-full px-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row md:gap-20 gap-4">
        <label className="flex-1">
          <span className={labelStyles}>Apartment type</span>
          <input
            type="text"
            placeholder="2 bedroom flat"
            className={inputStyles}
            {...register("title", { required: true })}
          />
          <p className={errorMessageStyles}>{errors.title?.message}</p>
        </label>

        <label className="flex-1">
          <span className={labelStyles}>Apartment value</span>
          <input
            type="number"
            placeholder="fill in amount"
            className={inputStyles}
            {...register("price")}
          />
          <p className={errorMessageStyles}>{errors.price?.message}</p>
        </label>
      </div>

      <label>
        <span className={labelStyles}>Location</span>
        <input
          type="text"
          className={inputStyles}
          placeholder="Fill in your address"
          {...register("location")}
        />
        <p className={errorMessageStyles}>{errors.location?.message}</p>
      </label>

      <label>
        <span className={labelStyles}>Upload image</span>
        <div className={inputStyles + " text-gray-400 cursor-pointer"}>
          {picture && picture.name}
          {!picture && "Attach a picture"}
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/png, image/jpeg"
          {...register("uploaded_images")}
          onChange={onChangePicture}
        />
        <p className={errorMessageStyles}>{errors.uploaded_images?.message}</p>
      </label>

      <label>
        <span className={labelStyles}>Brief Description</span>
        <textarea
          className={inputStyles}
          placeholder="Enter some description..."
          {...register("description")}
        ></textarea>
        <p className={errorMessageStyles}>{errors.description?.message}</p>
      </label>

      {/* <label>
        <span className={labelStyles}>
          <span className="text-red-700">*</span> Date of posting
        </span>
        <input
          className={inputStyles + " text-gray-400 uppercase max-w-[30rem]"}
          type="date"
        />
      </label> */}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="block ml-auto bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white justify-center items-center gap-4 py-4 px-12 w-fit"
      >
        {isAdding && <DotLoader color="#fff" size={21} />}
        {!isAdding && "Submit"}
      </button>
    </form>
  );
}
