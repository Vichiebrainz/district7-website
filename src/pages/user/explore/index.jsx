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

import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { DotLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import withAuth from "../../../middleware/isAuthenticated";
import { useNavigate } from "react-router-dom";

const Explore = ({ userId }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const gaEventTracker = useAnalyticsEventTracker("User dashboard events");

  const dispatch = useDispatch();

  const {
    allProperties,
    isFetching,
    isLiking,
    isLiked,
    isLikedError,
    isSuccess,
    isError,
    errorMessage,
  } = useSelector(propertySelector);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const likeProps = (id) => {
    dispatch(likeProperty(id));
    gaEventTracker("One property liked");
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isLikedError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isLiked) {
      // toast.success("Added to favorites");
      dispatch(clearState());
      dispatch(getAllProperties());
    }
  }, [isLikedError, isLiked]);

  console.log(allProperties);

  return (
    <div className="mt-8  md:mt-16 p-6">
      {/* <div className="flex flex-col md:flex-row gap-8 md:gap-16">
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
      </div> */}
      <div className="w-full h-[600px] my-20 md:my-10">
        <div className="text-black text-[21px] md:text-[28px] font-header font-semibold">
          Featured Apartments
        </div>
        <div className="w-full my-4 px-0 md:px-12 md:pt-10 pb-20 md:pb-0">
          {allProperties?.map((property, index) => (
            <div
              className="grid xl:grid-cols-[320px_auto] grid-cols-1 xl:grid-rows-1 grid-rows-[300px_auto] w-full rounded-[20px] bg-[#D4EFD7] shadow-card  my-8"
              key={index}>
              <div className="relative rounded-[20px]">
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
                  className="absolute inset-0 h-full w-full">
                  {property.images?.map((image, i) => (
                    <SwiperSlide className="h-full w-full" key={i}>
                      <img
                        src={image.media}
                        className="w-full h-full object-center object-cover rounded-[20px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full md:w-2/3 p-6 relative">
                <div className="text-black/70 font-header font-semibold text-[24px] leading-[26.63px]  mb-8 underline decoration-[#05C002]">
                  {property.title}
                </div>
                <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Description:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    {property.description}
                  </div>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Price:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    &#x20A6;
                    {parseFloat(property.price).toLocaleString()}.00
                  </div>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 items-start my-4">
                  <div className="w-1/4 text-black/70 font-header font-semibold text-[18px] leading-[20.63px]">
                    Location:
                  </div>
                  <div className="w-3/4 font-header text-[16px] font-normal text-black/70 leading-[18.19px]">
                    {property.location}
                  </div>
                </div>
                <div className=" md:w-full w-full mt-8 flex flex-row-reverse">
                  <div className="w-full flex flex-row-reverse justify-between gap-4 items-center">
                    {/* <a
                      onClick={() => gaEventTracker("User contacted agent")}
                      className="border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                      href={`https://wa.me/234${property?.owner?.phone_number?.substr(
                        1
                      )}?text=${encodeURIComponent(`is ${property.description} at ${property.location} still available? i found this listing on district 7`)}`}
                      target="_blank">
                      Contact Agent
                    </a> */}
                    <div
                      className="border-[1.5px] border-solid  border-[#05C002] md:border-[#068903] bg-[#05C002] md:bg-[#068903]  rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] text-white cursor-pointer"
                      onClick={() =>
                        navigate(`/user/property/${property?.id}`)
                      }>
                      View Details
                    </div>
                    {/* <div
                      className="border-[1.5px] border-black/60 rounded-[5px] px-10 py-2 font-header font-semibold text-[18px] leading-[22px] cursor-pointer"
                      onClick={() => likeProps(property?.id)}
                    >
                      {isLiking && <DotLoader color="#000" size={21} />}
                      
                    </div> */}
                    <div className="cursor-pointer text-[30px]">
                      {isLiking && <DotLoader color="#000" size={21} />}
                      {!isLiking && property?.liked_by.includes(userId) && (
                        <BsFillHeartFill
                          color="red"
                          onClick={() => likeProps(property?.id)}
                        />
                      )}
                      {!isLiking && !property?.liked_by.includes(userId) && (
                        <BsHeart
                          color="red"
                          onClick={() => likeProps(property?.id)}
                        />
                      )}
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

// const ExploreWithAuth = withAuth(Explore);
// export default ExploreWithAuth;
