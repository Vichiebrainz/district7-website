import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Slider from "react-slick";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};

const UserDashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  const handlePrevClick = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-16 space-between">
        <div className="basis-2/3 h-[500px] rounded-[20px] overflow-hidden shadow-card bg-[#068903]/5">
          {/* <img className="w-full" src={images[currentImage]} alt="" /> */}
          <div className="px-8 py-5">
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-16 flex gap-4">
              <span>Liked Apartments</span>
              <span className="text-[#05C002] text-[28px]">
                <BsFillHeartFill />
              </span>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <div className="h-[220px] w-[150px] rounded-[15px] bg-[#068903]">
                    <div className="w-full h-3/4">
                      <img
                        src={images[currentImage]}
                        alt=""
                        className="rounded-t-[15px]"
                      />
                    </div>
                    <div className="w-full h-1/4 px-4 py-2">
                      <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                        Duplex (Ibadan)
                      </p>
                      <p className="m-0 p-0 text-white text-[13px] leading-[19.85px] font-header font-semibold">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-[220px] w-[150px] rounded-[15px] bg-[#068903]">
                    <div className="w-full h-3/4">
                      <img
                        src={images[currentImage]}
                        alt=""
                        className="rounded-t-[15px]"
                      />
                    </div>
                    <div className="w-full h-1/4 px-4 py-2">
                      <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                        Duplex (Ibadan)
                      </p>
                      <p className="m-0 p-0 text-white text-[13px] leading-[19.85px] font-header font-semibold">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-[220px] w-[150px] rounded-[15px] bg-[#068903]">
                    <div className="w-full h-3/4">
                      <img
                        src={images[currentImage]}
                        alt=""
                        className="rounded-t-[15px]"
                      />
                    </div>
                    <div className="w-full h-1/4 px-4 py-2">
                      <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                        Duplex (Ibadan)
                      </p>
                      <p className="m-0 p-0 text-white text-[13px] leading-[19.85px] font-header font-semibold">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="h-[220px] w-[150px] rounded-[15px] bg-[#068903]">
                    <div className="w-full h-3/4">
                      <img
                        src={images[currentImage]}
                        alt=""
                        className="rounded-t-[15px]"
                      />
                    </div>
                    <div className="w-full h-1/4 px-4 py-2">
                      <p className="m-0 p-0 text-white text-[13px] leading-[15.85px] font-header font-normal">
                        Duplex (Ibadan)
                      </p>
                      <p className="m-0 p-0 text-white text-[13px] leading-[19.85px] font-header font-semibold">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* <div className="px-6 py-4 flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div> */}
        </div>
        <div className="basis-1/3 h-[5  00px] rounded-[20px] overflow-hidden shadow-card bg-[#068903]/5 relative">
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

      <div className="my-24">
        <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-8 ">
          Possible Connections
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full mr-2"
                  src="https://via.placeholder.com/150"
                  alt="User avatar"
                />
                <div className="text-black/70 text-[16px] leading-[19.5px] font-normal font-header">
                  <p className="my-1">Oluwatosin Adenike</p>
                  <p className="my-1 text-[13px] text-black/60">Student</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="my-24">
        <div className=" flex flex-row justify-between  items-center">
          <div>
            <div className="font-semibold font-header text-[20px] leading-[24.38px] mb-6 ">
              For any Complaint
            </div>
            <div>
              <a
                className="flex gap-2 items-center my-3"
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
                className="flex gap-2 items-center"
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
