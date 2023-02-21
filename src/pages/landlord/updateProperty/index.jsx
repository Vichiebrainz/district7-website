import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProperty,
  clearState,
  getSingleProperty,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DotLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { IoHelpCircleOutline } from "react-icons/io5";
import { Popover } from "../../../components/Popover";
import { useParams } from "react-router-dom";
import { get_single_property } from "../../../services/requests";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
    uploaded_images: yup.mixed().required("Images are required"),
  })
  .required();

export default function UpdateProperty() {
  const dispatch = useDispatch();
  let params = useParams();

  const [picture, setPicture] = useState(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [singleProperty, setSingleProperty] = useState();
  const [is_public, setIsPublic] = useState(true);
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [description, setDescription] = useState("");

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const {
    isAdding,
    isAdded,
    isAddedError,
    errorMessage,
    isLoggedIn,
    isLandlord,
    // singleProperty,
  } = useSelector(propertySelector);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      title: singleProperty?.title,
      price: singleProperty?.price,
      location: singleProperty?.location,
      description: singleProperty?.description,
      is_public: singleProperty?.is_public,
    },
  });

  const handleUpdate = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("uploaded_images", picture);
    formData.append("is_public", is_public);

    dispatch(addProperty(formData));
  };

  useEffect(() => {
    get_single_property(params.id).then((res) => setSingleProperty(res.data));
  }, []);

  console.log(singleProperty);

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
      toast.success("Property updated successfully");

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
    <>
      <div className="px-8 text-primary-green text-[21px] md:text-[28px] mb-10 mt-8 md:mt-0 font-header font-semibold">
        Update your property
      </div>
      <form className="md:px-32 w-full px-8" onSubmit={handleUpdate}>
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

        {/* <label>
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
      </label> */}

        <label>
          <span className={labelStyles}>Brief Description</span>
          <textarea
            className={inputStyles}
            placeholder="Enter some description..."
            {...register("description")}
          ></textarea>
          <p className={errorMessageStyles}>{errors.description?.message}</p>
        </label>

        <label>
          <div className="flex justify-between mb-8">
            <div className="relative">
              <div
                className="flex gap-1 items-center"
                onMouseEnter={() => setIsPopoverVisible(true)}
                onMouseLeave={() => setIsPopoverVisible(false)}
              >
                <div className={`${labelStyles}`}>Make Private</div>
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
                  //   checked={!is_public}
                  className="sr-only peer"
                  //   onChange={handleToggleChange}
                  {...!register("is_public")}
                />
                <div className="w-14 h-7 bg-transparent border-[2px] border-solid border-[#05C002] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[3px] after:left-[5px]  peer-checked:after:bg-white after:bg-[#05C002] after:border-none after:border after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-[#05C002] peer-checked:border-none"></div>
              </label>
            </div>
          </div>
        </label>

        <button
          type="submit"
          onClick={handleUpdate}
          className="block ml-auto bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white justify-center items-center gap-4 py-4 px-12 w-fit"
        >
          {isAdding && <DotLoader color="#fff" size={21} />}
          {!isAdding && "Update"}
        </button>
      </form>
    </>
  );
}
