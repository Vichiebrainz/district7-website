import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getAllProperties,
  likeProperty,
  propertySelector,
} from "../../../store/slices/propertySlice";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { DotLoader } from "react-spinners";
import { useToasts } from "react-toast-notifications";

const Explore = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { allProperties, isFetching, isSuccess, isError, errorMessage } =
    useSelector(propertySelector);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const likeProps = (id) => {
    dispatch(likeProperty(id));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    // if (isError) {
    //   addToast(errorMessage, { appearance: "error", autoDismiss: true });
    //   dispatch(clearState());
    // }
    // if (isSuccess) {
    //   addToast("Okay", {
    //     appearance: "success",
    //     autoDismiss: true,
    //   });
    //   dispatch(clearState());
    // }
  }, [isError, isSuccess]);

  console.log(allProperties);

  return (
    <div className="mt-8  md:mt-16 p-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="relative flex-1">
          <select
            className="block appearance-none w-full bg-white border-[1px] md:border-[1.5px] border-black/30 hover:border-black/60 px-4 py-4 pr-8 rounded-[5px] md:shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            ...
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div className="relative flex-1">
          <select
            className="block appearance-none w-full bg-white border-[1px] md:border-[1.5px] border-black/30 hover:border-black/60 px-4 py-4 pr-8 rounded-[5px] md:shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">State</option>
            <option value="NY">NY</option>
            <option value="CA">CA</option>
            <option value="IL">IL</option>
            ...
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div className="relative flex-1">
          <select
            className="block appearance-none w-full bg-white border-[1px] md:border-[1.5px] border-black/30 hover:border-black/60 px-4 py-4 pr-8 rounded-[5px] md:shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="NY">NY</option>
            <option value="CA">CA</option>
            <option value="IL">IL</option>
            ...
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div className="relative flex-1">
          <button className="w-full bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white flex justify-center items-center gap-4 p-4">
            <span>
              <BiSearch fontSize={24} />
            </span>
            <span>Explore</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[600px] my-20 md:my-10">
        <div className="text-black text-[21px] md:text-[28px] font-header font-semibold">
          Featured Apartments
        </div>
        <div className="w-full my-4 px-0 md:px-12 md:pt-10 pb-20 md:pb-0">
          {allProperties?.map((property, index) => (
            <div
              className="h-full md:h-[300px] w-full flex flex-col md:flex-row rounded-[20px] bg-[#D4EFD7] shadow-card"
              key={index}
            >
              <div className="md:w-1/3 w-full h-full rounded-[20px]">
                {/* <img
                  src={property.images[0].media}
                  className="h-full object-cover rounded-l-[20px]"
                /> */}
                <Swiper
                  spaceBetween={30}
                  effect={"fade"}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectFade, Navigation]}
                  className="h-[300px]"
                >
                  {property.images?.map((image, i) => (
                    <SwiperSlide className="h-full" key={i}>
                      <img
                        src={image.media}
                        className="h-full object-cover rounded-[20px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full md:w-2/3 p-6 relative">
                <div className="text-black/70 font-header font-semibold text-[24px] leading-[26.63px]  mb-8 underline decoration-[#05C002]">
                  {property.title}
                </div>
                <div className="flex flex-col md:flex-row flex-wrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Description:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    {property.description}
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Price:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    {property.price}
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Location:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    {property.location}
                  </div>
                </div>
                <div className=" md:absolute md:w-full md:bottom-4 md:right-4 mt-8">
                  <div className="w-full flex justify-center gap-4 items-center">
                    <div
                      className="border-[1.5px] border-black/60 rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] cursor-pointer"
                      onClick={() => likeProps(property?.id)}
                    >
                      {isFetching && <DotLoader color="#000" size={21} />}
                      {!isFetching && "Like"}
                    </div>
                    <div className="border-[1.5px] border-none bg-[#068903] rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer">
                      Purchase
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
