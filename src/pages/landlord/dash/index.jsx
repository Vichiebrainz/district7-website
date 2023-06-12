import React, { useRef, useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { dashboardLikedApartments, possibleConnections } from "../../../data";
import { returnRandomApartment } from "../../../helper/randomizeProfilePictures";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  EffectCreative,
  EffectCards,
} from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAddedProperties,
  propertySelector,
} from "../../../store/slices/propertySlice";

const LandlordDashboard = () => {
  const dispatch = useDispatch();

  const { userAddedProperties } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getUserAddedProperties());
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-16 space-between mt-8 mb-20  md:mt-0 px-6 md:px-0">
        <div className="basis-full md:basis-2/3 h-[500px] rounded-[20px] overflow-hidden shadow-card bg-[#068903]/5">
          <div className="px-8 py-5 ">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 md:mb-16 flex gap-4">
              <span>Posted Apartments</span>
              <span className="text-[#05C002] text-[28px]">
                <BsFillHeartFill />
              </span>
            </div>
            <div className="hidden md:block">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={false}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                autoplay={false}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {userAddedProperties?.map((apartment, i) => (
                  <SwiperSlide key={i}>
                    <div className="h-[300px] w-[200px] rounded-[15px] bg-[#068903] cursor-pointer shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                      <div className="w-full h-3/4">
                        <img
                          src={apartment?.images[0].image}
                          alt=""
                          className="w-full rounded-t-[15px] h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-full md:h-1/4 px-3 py-2 mb-1">
                        <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                          {apartment.title}
                        </p>
                        <p className="m-0 p-0 text-white text-[11px] leading-[15.85px] font-header font-normal">
                          {apartment.location}
                        </p>
                        <p className="m-0 p-0 text-white text-[11px] leading-[19.85px] font-header font-thin">
                          {apartment.price}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
                navigation={true}
                modules={[Autoplay, Navigation]}
                // modules={[EffectCreative]}
                className="mySwiper"
              >
                {userAddedProperties?.map((apartment, i) => (
                  <SwiperSlide key={i}>
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
            </div>
          </div>
        </div>
        <div className="md:basis-1/3 md:h-[500px] h-full rounded-[20px] overflow-hidden shadow-card bg-[#068903]/5 relative">
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
          <div className="w-full h-[150px] p-8 flex text-center justify-center items-center text-[15px] md:text-[21px] font-semibold font-header text-[#068903]">
            You have not made any transactions yet!
          </div>
        </div>
      </div>

      <div className="md:basis-1/3 mx-6 h-full rounded-[20px] overflow-hidden shadow-card bg-[#068903]/5 relative">
        <div className="px-8 py-5">
          <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 ">
            List of Orders
          </div>
        </div>
        <div className="w-full h-[150px] p-8 flex text-center justify-center items-center text-[15px] md:text-[21px] font-semibold font-header text-[#068903]">
          You have not made any transactions yet!
        </div>
      </div>

      {/* <div className="md:my-24 my-8 bg-transparent">
        <div className="font-semibold font-header text-[20px] p-4 md:p-0 md:text-[20px] leading-[24.38px] md:mb-8 ">
          List of Orders
        </div>
        <div className="flex w-full">
          <div className="w-fit h-full rounded-[20px] overflow-hidden md:shadow-card bg-[#068903]/5 relative px-[33px] py-[24px]">
            <div className="font-medium text-[18px] text-[#05C002] leading-[21.78px] mb-[24px]">
              1 Flat, No 13, Orogun Ibadan.
            </div>
            <div className="font-normal text-[16px] text-[#252320] leading-[19.36px] mb-4">
              15, Sept. 2022
            </div>
            <div className="flex justify-between items-center gap-8">
              <div className="font-normal text-[16px] text-[#252320] leading-[19.36px] mb-4">
                By Adeola Ademokun
              </div>
              <div className="bg-[#068903] text-white font-medium px-[18px] py-[10px] rounded-[5px]">
                Details
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandlordDashboard;
