import React, { useEffect, useRef, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleProperty,
  propertySelector,
} from "../../../../store/slices/propertySlice";
import _ from "lodash";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const ViewApartmentDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { propId } = useParams();

  const { singleProperty, isFetching, isSuccess, isError, errorMessage } =
    useSelector(propertySelector);

  useEffect(() => {
    dispatch(getSingleProperty(propId));
  }, []);

  console.log(singleProperty);

  const returnVideo = () => {
    if (singleProperty) {
      return _.find(singleProperty.images, { media_type: "video" })?.media;
    }
  };

  const returnImages = () => {
    if (singleProperty) {
      return _.filter(singleProperty.images, { media_type: "image" });
    }
  };

  console.log(returnVideo());

  return (
    <div className="px-6 md:px-0">
      <div className="w-full flex items-center mb-6 ">
        <div className="flex items-center gap-2">
          <HiArrowLongLeft />
          <div
            className="text-gray-500 font-header text-[14px] hover:text-black hover:font-semibold transition-all cursor-pointer"
            onClick={() => navigate("/user/explore")}>
            Back to Explore
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-2/3">
          <div className="video-player w-full md:max-w-[600px] h-[200px] md:h-[400px] rounded-[18px] md:rounded-[30px] mb-8">
            <Swiper
              loop={true}
              //   autoplay={{
              //     delay: 5000,
              //     disableOnInteraction: false,
              //   }}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full rounded-[18px] md:rounded-[30px] ">
              {returnVideo() && (
                <SwiperSlide>
                  <ReactPlayer
                    url={returnVideo()}
                    controls
                    loop
                    playing
                    width={"100%"}
                    height={"100%"}
                    className="rounded-[18px] [&>*]:rounded-[18px]"
                  />
                </SwiperSlide>
              )}

              {returnImages()?.map((image, i) => (
                <SwiperSlide>
                  <img
                    src={image.media}
                    className="w-full h-full md:h-full rounded-[18px] object-cover"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full md:basis-1/3">
          <div className="flex w-full flex-col gap-3">
            <div className="w-full p-4 rounded-[20px] bg-white/90 flex gap-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <h6 className="text-[20px] md:text-[24px] font-header font-semibold">
                ₦ {singleProperty?.price.toLocaleString()}
              </h6>
            </div>
            <div className="w-full p-4 rounded-[20px] bg-white/90 gap-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] md:flex hidden">
              <button
                className="w-1/2 flex justify-center items-center gap-6 border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                disabled>
                <span>Save</span>
                <AiOutlineHeart fontSize={32} color="#fff" />
              </button>
              <div
                className="w-1/2 flex justify-center items-center  gap-6 border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-transparent md:bg-transparent rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-[#05C002] md:text-[#068903] cursor-pointer"
                disabled>
                <span>Share</span>
                <IoMdShareAlt color="#068903" fontSize={30} />
              </div>
            </div>
            <div className="w-full p-4 rounded-[20px] bg-white/90 gap-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <h5 className="font-header font-semibold text-[18px] md:text-[21px] mb-8">
                Description
              </h5>
              <div className="flex justify-between items-center text-[15px] font-light text-black/75 font-header">
                {singleProperty?.description}
              </div>
            </div>
            <div className="w-full p-4 rounded-[20px] bg-white/90 gap-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <h5 className="font-header font-semibold text-[18px] md:text-[21px] mb-8">
                Contact Agent
              </h5>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-[2px] border-solid border-[#068903]">
                    <img
                      src={singleProperty?.owner.avatar}
                      alt=""
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>
                  <h6 className="font-header font-bold text-[18px]">
                    {singleProperty?.owner.first_name +
                      " " +
                      singleProperty?.owner.last_name}
                  </h6>
                </div>
                {/* <button
                  className="w-fit flex justify-center items-center gap-6 border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-7 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                  disabled>
                  <span>Contact</span>
                </button> */}
                <a
                  onClick={() => gaEventTracker("User contacted agent")}
                  className="border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                  href={`https://wa.me/234${singleProperty?.owner?.phone_number?.substr(
                    1
                  )}?text=${encodeURIComponent(
                    `is ${singleProperty?.title} at ${singleProperty?.location} still available? i found this listing on district 7`
                  )}`}
                  target="_blank">
                  Contact Agent
                </a>
              </div>
            </div>
            {/* <div className="w-full p-4 rounded-[20px] bg-white/90  gap-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <h5 className="font-header font-semibold text-[18px] md:text-[21px] mb-8">
                Contact
              </h5>
              <textarea
                rows={3}
                className="w-full rounded-[12px] border-[2px] border-solid border-gray-600 p-2 focus:outline-[#068903] mb-6"
              />
              <button
                className="w-full flex justify-center items-center gap-6 border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                disabled>
                <span>Contact</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApartmentDetails;
