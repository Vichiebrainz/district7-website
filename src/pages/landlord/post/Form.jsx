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
import { IoClose, IoCloseCircle, IoHelpCircleOutline } from "react-icons/io5";
import { Popover } from "../../../components/Popover";

import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
    uploaded_images: yup.mixed().required("Images are required"),
    uploaded_videos: yup.mixed().required("A video upload is required"),
  })
  .required();

export default function Form() {
  const dispatch = useDispatch();

  // const [picture, setPicture] = useState(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [is_public, setIsPublic] = useState(true);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoFile, setVideoFile] = useState(null);

  const gaEventTracker = useAnalyticsEventTracker("Landlord Section");

  const selectFiles = (event) => {
    if (selectedFiles.length > 4) {
      toast("You can only upload 5 images");
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        setImagePreviews([
          ...imagePreviews,
          URL.createObjectURL(event.target.files[i]),
        ]);
      }

      setSelectedFiles([...selectedFiles, event.target.files[0]]);
      // setImagePreviews(images);
    }
  };

  const selectVideo = (event) => {
    const file = event.target.files[0];
    const fileSize = file.size / 1024 / 1024; // convert to MB
    if (fileSize <= 20) {
      setVideoFile(file);
    } else {
      toast("File size exceeds 20MB limit.");
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
  };

  // Single Image uplaod
  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const emptyArray = (array) => {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  console.log(emptyArray(selectedFiles));

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      is_public: true,
    },
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
    Array.from(selectedFiles).forEach((file) => {
      formData.append("uploaded_images", file);
    });
    if (videoFile){
      formData.append("uploaded_videos", videoFile)
    }
    formData.append("is_public", is_public);

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
      gaEventTracker("New Property Added!");

      dispatch(clearState());
    }
  }, [isAdded, isAddedError]);

  const handleToggleChange = () => {
    setIsPublic((prevState) => !prevState);
  };

  const labelStyles =
    "block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3";

  const inputStyles =
    "border border-[#92918F] border-solid form-input mb-1 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] focus:outline-[#05C002] md:focus:outline-[#068903]";

  const errorMessageStyles =
    "text-[crimson] text-[13px] font-medium font-header mb-6";

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
        <span className={labelStyles}>
          Upload image{" "}
          <span className="font-bold text-[13px] text-primary-green">
            (You can upload up to 5 images)
          </span>
        </span>
        <div className={inputStyles + " text-gray-400 cursor-pointer"}>
          {/* {picture && picture.name} */}
          {/* {selectedFiles.length ==0 && "Attach a picture"} */}
          {imagePreviews && (
            <div className="w-full flex gap-2 h-[50px]">
              {imagePreviews.map((img, i) => {
                return (
                  <div className="relative" key={i}>
                    <img
                      // className="preview"
                      src={img}
                      alt={"image-" + i}
                      className="w-[48px] md:w-[72px] object-cover h-full mx-4"
                    />
                    {/* <div
                      className="cursor-pointer absolute top-0 right-4"
                      onClick={removeVideo}>
                      <IoCloseCircle />
                    </div> */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          multiple
          accept="image/png, image/jpeg"
          {...register("uploaded_images")}
          onChange={selectFiles}
        />
        <p className={errorMessageStyles}>{errors.uploaded_images?.message}</p>
      </label>

      <label>
        <span className={labelStyles}>
          Upload video{" "}
          <span className="font-bold text-[13px] text-[crimson]">
            (Video should be less than 20mb)
          </span>
        </span>
        <div className={inputStyles + " text-gray-400 cursor-pointer"}>
          {videoFile && (
            <div className="w-full flex justify-between items-center gap-2 h-[40px]">
              <div className="font-header text-gray-600 text-[15px]">
                {videoFile.name.slice(0, 30)}...
              </div>
              <div
                className="cursor-pointer rounded-full h-[28px] w-[28px] bg-transparent grid place-items-center hover:bg-gray-100 transition-all"
                onClick={removeVideo}>
                <IoClose />
              </div>
            </div>
          )}
        </div>
        {!videoFile && (
          <input
            type="file"
            className="hidden"
            multiple
            accept="video/mp4, video/x-msvideo, video/x-ms-wmv, video/quicktime, video/webm, video/x-flv, video/mpeg, video/mkv"
            {...register("uploaded_videos")}
            onChange={selectVideo}
          />
        )}
        <p className={errorMessageStyles}>{errors.uploaded_media?.message}</p>
      </label>

      <label>
        <span className={labelStyles}>Brief Description</span>
        <textarea
          className={inputStyles}
          placeholder="Enter some description..."
          {...register("description")}></textarea>
        <p className={errorMessageStyles}>{errors.description?.message}</p>
      </label>

      {/* <label>
        <div className="flex justify-between mb-8">
          <div className="relative">
            <div
              className="flex gap-1 items-center"
              onMouseEnter={() => setIsPopoverVisible(true)}
              onMouseLeave={() => setIsPopoverVisible(false)}>
              <div className={`${labelStyles}`}>Is Public</div>
              <IoHelpCircleOutline className={labelStyles} />
            </div>
            <Popover
              isPopoverVisible={isPopoverVisible}
              text={
                " If private, client would not be able to see this post until you make it public"
              }
            />
          </div>
          <div>
            <label className="relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                // checked={!is_public}
                // onChange={handleToggleChange}
                {...register("is_public")}
              />
              <div className="w-14 h-7 bg-transparent border-[2px] border-solid border-[#05C002] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[3px] after:left-[5px]  peer-checked:after:bg-white after:bg-[#05C002] after:border-none after:border after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-[#05C002] peer-checked:border-none"></div>
            </label>
          </div>
        </div>
      </label> */}

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
        disabled={emptyArray(selectedFiles)}
        className="block ml-auto bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white justify-center items-center gap-4 py-4 px-12 w-fit">
        {isAdding && <DotLoader color="#fff" size={21} />}
        {!isAdding && "Submit"}
      </button>
    </form>
  );
}
