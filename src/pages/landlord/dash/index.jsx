import React, { useRef, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
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

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 3,
  speed: 500,
  // nextArrow: <BsFillArrowRightCircleFill color="#068903" size={24} />,
  // prevArrow: <BsFillArrowLeftCircleFill color="#068903" size={24} />,
};

const LandlordDashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

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
                {dashboardLikedApartments.map((apartment, i) => (
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
            </div>

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
        <div className="md:basis-1/3 h-[5  00px] rounded-[20px] overflow-hidden md:shadow-card bg-[#068903]/5 relative">
          {/* <img className="w-full" src={images[currentImage]} alt="" /> */}
          <div className="px-8 py-5">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 ">
              Recent Transactions
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
          </div>
        </div>
      </div>

      <div className="md:my-24 my-8 bg-[#068903]/5 md:bg-transparent">
        <div className="font-semibold font-header text-[14px] p-4 md:p-0 md:text-[20px] leading-[24.38px] md:mb-8 ">
          Possible Connections
        </div>
        <div className="hidden md:block">
          <Slider {...settings}>
            {possibleConnections.map((value, i) => (
              <div key={i}>
                <div>
                  <img
                    className="w-24 h-24 rounded-full mr-2 object-cover"
                    src={returnRandomImage()}
                    alt="User avatar"
                  />
                  <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                    <p className="my-1">{value.name}</p>
                    <p className="my-1 text-[13px] text-black/60">
                      {value.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" md:hidden grid grid-cols-2 px-6">
          {possibleConnections.slice(0, 8).map((value, i) => (
            <div className="flex items-center gap-1  my-[6px] " key={i}>
              <div>
                <img
                  className="w-9 h-9 rounded-full mr-1 object-cover"
                  src={returnRandomImage()}
                  alt="User avatar"
                />
              </div>
              <div className="text-black/70 text-[12px] md:text-[16px] leading-[19.5px] font-normal font-header">
                <p className="my-[2px]">{value.name}</p>
                <p className="my-[2px] text-[11px] md:text-[13px] text-black/60">
                  {value.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
