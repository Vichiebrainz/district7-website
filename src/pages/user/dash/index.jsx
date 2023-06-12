import React, { useRef, useState } from "react";
import { BsArrowRight, BsFillHeartFill } from "react-icons/bs";
import Slider from "react-slick";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import { dashboardLikedApartments, possibleConnections } from "../../../data";
import {
  returnRandomImage,
  returnRandomApartment,
} from "../../../helper/randomizeProfilePictures";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  EffectCube,
  EffectCreative,
} from "swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProperties,
  getUserLikedProperties,
  likeProperty,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { useNavigate } from "react-router-dom";
import {
  getUserOrders,
  ordersSelector,
} from "../../../store/slices/ordersSlice";
import { DotLoader } from "react-spinners";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    allProperties,
    userLikedProperties,
    isFetching,
    isSuccess,
    isError,
    errorMessage,
  } = useSelector(propertySelector);
  const { userOrders } = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(getAllProperties());
    dispatch(getUserLikedProperties());
    dispatch(getUserOrders());
  }, []);

  console.log(userLikedProperties);

  const likeProps = (id) => {
    dispatch(likeProperty(id));
  };

  return (
    <div className="px-6 xl:px-0">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 space-between mt-8 md:mt-0">
        <div className="md:w-2/3 md:h-[500px] h-full rounded-[20px] overflow-hidden md:shadow-card bg-[#068903]/5 relative">
          <div className="px-6 py-5 mb-4 ">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6   md:mb-16 flex gap-4">
              <span>Liked Apartments</span>
              <span className="text-[#05C002] text-[28px]">
                <BsFillHeartFill />
              </span>
            </div>
            <div>
              {userLikedProperties?.length > 0 ? (
                <>
                  <Swiper
                    // spaceBetween={30}
                    slidesPerView={innerWidth >= 640 ? 3 : 1}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {userLikedProperties.map((apartment, i) => (
                      <SwiperSlide key={i}>
                        <div className="h-[280px] w-[200px] rounded-[15px] bg-[#068903] cursor-pointer shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] mx-auto">
                          <div className="w-full h-3/4">
                            <img
                              src={apartment?.images[0]?.image}
                              alt=""
                              className="w-full rounded-t-[15px] h-full object-cover"
                            />
                          </div>
                          <div className="w-full h-full px-3 py-2 mb-1">
                            <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                              {apartment.title}
                            </p>
                            <p className="m-0 p-0 text-white text-[11px] leading-[15.85px] font-header font-normal">
                              {apartment.location}
                            </p>
                            <p className="m-0 p-0 text-white text-[11px] leading-[19.85px] font-header font-thin">
                              N {apartment.price}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="px-6 py-4 flex justify-between text-[#068903] text-[16px] leading-[19.5px] font-semibold font-header absolute bottom-0 right-2 cursor-pointer underline"
                    onClick={() => navigate("/user/settings?tab=liked")}>
                    See more
                  </div>
                </>
              ) : (
                <div className="w-full h-[300px] flex justify-center items-center ">
                  <div className="flex flex-col items-center font-header text-center font-semibold text-[12px] md:text-[18px] text-black/70">
                    You have not liked any apartments, yet. Like an apartment to
                    get started
                    <button
                      className="w-fit text-white font-header font-semibold flex items-center gap-3 bg-[#05C002] md:bg-[#068903] rounded-[8px] shadow  p-4 my-3 hover:shadow-lg "
                      onClick={() => navigate("/user/explore")}>
                      <span>See apartments</span>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="block md:hidden">
              {userLikedProperties?.length > 0 ? (
                <>
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    // modules={[EffectCreative]}
                    className="mySwiper w-full">
                    {userLikedProperties?.map((apartment, i) => (
                      <SwiperSlide key={i} className="w-full">
                        <div>
                          <div className="w-full h-[250px] flex flex-col rounded-[5px]">
                            <div className="h-2/3">
                              <img
                                src={apartment?.images[0].media}
                                alt=""
                                className="w-full rounded-t-[5px] h-full object-cover"
                              />
                            </div>
                            <div className="h-1/3 bg-[#05C002] rounded-b-[5px] relative">
                              <div className="w-full h-full px-3 py-2 mb-1">
                                <p className="m-0 p-0 text-white text-[14px] leading-[15.85px] font-header font-normal my-1">
                                  {apartment.title}
                                </p>
                                <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal my-1">
                                  {apartment.location}
                                </p>
                                <p className="m-0 p-0 text-white text-[10px] leading-[15.85px] font-header font-bold">
                                  N {apartment.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="px-6 py-4 flex justify-between text-[#068903] text-[14px] leading-[19.5px] font-semibold font-header absolute bottom-0 right-2 cursor-pointer underline mt-4"
                    onClick={() => navigate("/user/settings?tab=liked")}>
                    See more
                  </div>
                </>
              ) : (
                <div className="w-full h-[300px] flex justify-center items-center ">
                  <div className="flex flex-col items-center font-header text-center font-semibold text-[12px] md:text-[18px] text-black/70">
                    You have not liked any apartments, yet. Like an apartment to
                    get started
                    <button
                      className="w-fit text-white font-header font-semibold flex items-center gap-3 bg-[#05C002] md:bg-[#068903] rounded-[8px] shadow  p-4 my-3 hover:shadow-lg "
                      onClick={() => navigate("/user/explore")}>
                      <span>See apartments</span>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>

        <div className="md:w-1/3 md:h-[500px] h-full rounded-[20px] overflow-hidden md:shadow-card bg-[#068903]/5 relative">
          <div className="px-8 py-5">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 ">
              Recent Transactions
            </div>
            {/* <div className="font-header text-black/60 mb-6">
              <div className="font-medium text-[18px] leading-[21.94px] my-2">
                10 august, 2022
              </div>
              <div className="text-[16px] leading-[19.5px] font-normal flex gap-6 my-2">
                <span>$2000</span>
                <span>Duplex</span>
              </div>
              <p className="text-[16px] leading-[19.5px] font-normal my-2">
                1 year duration
              </p>
            </div>
            <div className="font-header text-black/60 mb-6">
              <div className="font-medium text-[18px] leading-[21.94px] my-2">
                10 august, 2022
              </div>
              <div className="text-[16px] leading-[19.5px] font-normal flex gap-6 my-2">
                <span>$2000</span>
                <span>Duplex</span>
              </div>
              <p className="text-[16px] leading-[19.5px] font-normal my-2">
                1 year duration
              </p>
            </div>
            <div className="font-header text-black/60 mb-6">
              <div className="font-medium text-[18px] leading-[21.94px] my-2">
                10 august, 2022
              </div>
              <div className="text-[16px] leading-[19.5px] font-normal flex gap-6 my-2">
                <span>$2000</span>
                <span>Duplex</span>
              </div>
              <p className="text-[16px] leading-[19.5px] font-normal my-2">
                1 year duration
              </p>
            </div> */}
            {/* <div className="px-6 py-4 flex justify-between text-[#068903] text-[16px] leading-[19.5px] font-semibold font-header absolute bottom-2 right-2 cursor-pointer">
            See more
          </div> */}
          </div>
          <div className="w-full h-[150px] p-8 flex text-center justify-center items-center text-[15px] md:text-[21px] font-semibold font-header text-black/70">
            You have not made any transactions yet!
          </div>
        </div>
      </div>

      <div className="md:my-24 my-8 bg-[#068903]/5 md:bg-transparent p-4 rounded-[20px]">
        <div className="font-semibold font-header text-[18px] my-8 p-0 md:p-0 md:text-[20px] leading-[24.38px] mb-3">
          Get a property
        </div>
        <div className="md:mb-8  font-header text-black/60 text-[12px] mb-6">
          Browse through our gallery of apartments to find yourself a new home
        </div>
        <button
          className="text-white font-header font-semibold flex items-center gap-3 bg-[#05C002] md:bg-[#068903] rounded-[8px] shadow  p-4 my-3 hover:shadow-lg"
          onClick={() => navigate("/user/explore")}>
          <span>Explore</span>
          <BsArrowRight />
        </button>

        {/* <div>
          {allProperties?.map((property, index) => (
            <div
              className="md:w-[600px] w-full h-full md:h-[250px] bg-[#068903]/5 shadow-card rounded-[20px] flex flex-col md:flex-row  "
              key={index}
            >
              <div className="md:w-2/5 w-full rounded-[20px] md:rounded-l-[20px]">
                <img
                  src={property.images[0].media}
                  className="h-full object-cover rounded-[20px] md:rounded-l-[20px]"
                />
              </div>
              <div className="w-full md:w-3/5 p-6 relative">
                <div className="text-black/70 font-header font-semibold text-[18px] md:text-[21px] leading-[26.63px]  mb-8 underline decoration-[#05C002]">
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
        </div> */}
      </div>

      <div className="md:my-24 my-8 bg-[#068903]/5 md:bg-transparent p-4 rounded-[20px]">
        <div className="font-semibold font-header text-[18px] md:p-0 md:text-[20px] leading-[24.38px] md:mb-4 ">
          Possible Connections
        </div>
        <div>
          <div className=" font-header text-black/60 md:text-[15px] text-[12px]  my-6">
            See possible connections on District connect{" "}
          </div>
          <button
            className="text-white font-header font-semibold flex items-center gap-3  bg-[#05C002] md:bg-[#068903] rounded-[8px] shadow  p-4 my-3 hover:shadow-lg"
            onClick={() => navigate("/user/connect")}>
            <span>Go to district connect</span>
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="my-24 hidden md:block">
        <div className=" flex flex-row justify-between  items-center">
          <div>
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 ">
              For any Complaint
            </div>
            <div>
              <a
                className="flex gap-2 items-center my-4 link link-underline link-underline-black"
                href="tel:+2349065918317">
                <div>
                  <BsFillTelephoneFill fontSize={22} color="#05C002" />
                </div>
                <div className="font-header font-normal text-[18px] leading-[21.94px] text-black/60 ">
                  +2349065918317
                </div>
              </a>
              <a
                className="flex gap-2 items-center link link-underline link-underline-black"
                href="mailto:weatdistrict7@gmail.com">
                <div>
                  <RiMailSendFill fontSize={22} color="#05C002" />
                </div>
                <div className="font-header font-normal text-[18px] leading-[21.94px] text-black/60">
                  weatdistrict7@gmail.com
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 text-[#F80202]">
              Disclaimer !!!
            </div>
            <p className="text-[#EB001B] text-[16px] leading-[19.5px] font-normal font-header w-[450px]">
              Be mindful not to make any payment outside this platform as we
              will not be responsible for any loss acquired through payments
              made outside this platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
