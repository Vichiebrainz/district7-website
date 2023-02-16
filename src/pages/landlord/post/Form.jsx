import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProperty } from "../../../store/slices/propertySlice";

export default function Form() {
  const [title, setTitle] = useState("Face to face");
  const [location, setLocation] = useState("Agbowo");
  const [price, setPrice] = useState("50000");
  const [description, setDescription] = useState("conducive");
  const [uploaded_images, setUploadedImages] = useState(null);

  const dispatch = useDispatch();

  const labelStyles =
    "block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3";
  const inputStyles =
    "border border-[#92918F] border-solid form-input mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]";

  const postApartment = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("uploaded_images", uploaded_images);

    console.log(formData);

    dispatch(addProperty(formData));
  };

  // console.log(uploaded_images[0]);

  return (
    <form className="md:px-32 w-full px-8">
      <div className="flex md:gap-20 gap-12">
        <label className="flex-1">
          <span className={labelStyles}>Apartment type</span>
          <input
            type="text"
            placeholder="2 bedroom flat"
            className={inputStyles}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="flex-1">
          <span className={labelStyles}>Apartment value</span>
          <input
            type="number"
            placeholder="fill in amount"
            className={inputStyles}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <label>
        <span className={labelStyles}>Location</span>
        <input
          type="text"
          className={inputStyles}
          placeholder="Fill in your address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        <span className={labelStyles}>Upload image</span>
        <input
          type="file"
          className="hidden"
          // value={uploaded_images?.name}
          onChange={(e) => setUploadedImages(e.target.files[0])}
        />
        <div className={inputStyles + " text-gray-400 cursor-pointer"}>
          {uploaded_images?.name && uploaded_images[0].name}
          {!uploaded_images?.name && "Upload image for proof"}
        </div>
      </label>
      <label>
        <span className={labelStyles}>Brief Description</span>
        <textarea
          className={inputStyles}
          placeholder="fill in your address"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        <span className={labelStyles}>
          <span className="text-red-700">*</span> Date of posting
        </span>
        <input
          className={inputStyles + " text-gray-400 uppercase max-w-[30rem]"}
          type="date"
        />
      </label>
      <button
        onClick={postApartment}
        className="block ml-auto bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white justify-center items-center gap-4 py-4 px-12 w-fit"
      >
        Submit
      </button>
    </form>
  );
}
