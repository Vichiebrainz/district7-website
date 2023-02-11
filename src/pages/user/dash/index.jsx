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

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, EffectCreative } from "swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProperties,
  getUserLikedProperties,
  propertySelector,
} from "../../../store/slices/propertySlice";
import { useNavigate } from "react-router-dom";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 3,
  speed: 500,
};

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProperties, userLikedProperties } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getAllProperties());
    dispatch(getUserLikedProperties());
  }, []);

  console.log(userLikedProperties);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-16 space-between mt-8 md:mt-0">
        <div className="basis-full md:basis-2/3 h-[500px] rounded-[20px] overflow-hidden md:shadow-card md:bg-[#068903]/5">
          <div className="px-8 py-5 ">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6   md:mb-16 flex gap-4">
              <span>Liked Apartments</span>
              <span className="text-[#05C002] text-[28px]">
                <BsFillHeartFill />
              </span>
            </div>
            <div className="hidden md:block">
              {userLikedProperties?.length > 0 ? (
                <Swiper
                  slidesPerView={3.4}
                  spaceBetween={30}
                  loop={true}
                  grabCursor={true}
                  centeredSlides={true}
                  effect={"coverflow"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation, EffectCoverflow]}
                  className="mySwiper"
                >
                  {userLikedProperties.map((apartment, i) => (
                    <SwiperSlide key={i}>
                      <div className="h-[220px] w-[150px] rounded-[15px] bg-[#068903] cursor-pointer shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                        <div className="w-full h-3/4">
                          <img
                            src={returnRandomApartment()}
                            alt=""
                            className="w-full rounded-t-[15px] h-full object-cover"
                          />
                        </div>
                        <div className="w-full h-full px-3 py-2 mb-1">
                          <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                            {apartment.propertyType}
                          </p>
                          <p className="m-0 p-0 text-white text-[11px] leading-[15.85px] font-header font-normal">
                            {apartment.propertyType}
                          </p>
                          <p className="m-0 p-0 text-white text-[11px] leading-[19.85px] font-header font-thin">
                            {apartment.price}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="w-full h-[300px] flex justify-center items-center font-header text-center font-semibold text-[12px] md:text-[18px] text-black/70">
                  You have not liked any new home. Like an apartment to get
                  started.
                </div>
              )}
            </div>

            <div className="block md:hidden">
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
                modules={[EffectCreative]}
                className="mySwiper"
              >
                {dashboardLikedApartments.map((apartment, i) => (
                  <SwiperSlide key={i}>
                    <div>
                      <div className="w-full h-[150px] flex rounded-[5px]">
                        <div className="w-2/3">
                          <img
                            src={returnRandomApartment()}
                            alt=""
                            className="w-full rounded-l-[5px] h-full object-cover"
                          />
                        </div>
                        <div className="w-1/3 bg-[#05C002] rounded-r-[5px] relative">
                          <div className="w-full h-full px-3 py-2 mb-1">
                            <p className="m-0 p-0 text-white text-[11px] leading-[15.85px] font-header font-normal">
                              {apartment.propertyType}
                            </p>
                            <p className="m-0 p-0 text-white text-[10px] leading-[15.85px] font-header font-normal">
                              {apartment.price}
                            </p>
                            <p className="m-0 p-0 text-white text-[11px] leading-[19.85px] font-header   absolute bottom bottom-2 underline">
                              See more
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="md:basis-1/3 h-[500px] rounded-[20px] overflow-hidden md:shadow-card bg-[#068903]/5 relative">
          {/* <img className="w-full" src={images[currentImage]} alt="" /> */}
          <div className="md:px-8 px-4 py-5">
            <div className="font-semibold font-header text-[16px] md:text-[20px] leading-[24.38px] mb-6 ">
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
            </div>
          </div>
          <div className="px-6 py-4 flex justify-between text-[#068903] text-[16px] leading-[19.5px] font-semibold font-header absolute bottom-2 right-2 cursor-pointer">
            See more
          </div> */}

            <div className="w-full  h-full text-center flex justify-center items-center font-header text-[12px] font-light md:text-[15px] text-black/70 mt-24">
              You have not made any transaction. Order an apartment to get
              started.
            </div>
          </div>
        </div>
      </div>

      <div className="md:my-24 my-8 bg-[#068903]/5 md:bg-transparent">
        <div className="font-semibold font-header text-[14px] p-4 md:p-0 md:text-[20px] leading-[24.38px] mb-3">
          Get a property
        </div>
        <div className="md:mb-8  font-header text-black/60 text-[12px]">
          Browse through our gallery of apartments to get one suitable for you
        </div>
        <div>
          {allProperties?.map((property, index) => (
            <div
              className="w-[550px] h-[250px] bg-[#068903]/5 shadow-card rounded-[20px] flex"
              key={index}
            >
              <div className="w-2/5 bg-red-500 rounded-l-[20px]">
                <img
                  src={property.images[0].media}
                  className="h-full object-cover rounded-l-[20px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:my-24 my-8 bg-[#068903]/5 md:bg-transparent">
        <div className="font-semibold font-header text-[14px] p-4 md:p-0 md:text-[20px] leading-[24.38px] md:mb-4 ">
          Possible Connections
        </div>
        <div>
          <div className=" font-header text-black/60 text-[15px]">
            See possible connections on District connect{" "}
          </div>
          <button
            className="text-white font-header font-semibold flex items-center gap-3 bg-[#068903] rounded-[8px] shadow  p-4 my-3 hover:shadow-lg"
            onClick={() => navigate("/user/connect")}
          >
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
                href="tel:+2349065918317"
              >
                <div>
                  <BsFillTelephoneFill fontSize={22} color="#05C002" />
                </div>
                <div className="font-header font-normal text-[18px] leading-[21.94px] text-black/60 ">
                  +2349065918317
                </div>
              </a>
              <a
                className="flex gap-2 items-center link link-underline link-underline-black"
                href="mailto:weatdistrict7@gmail.com"
              >
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
