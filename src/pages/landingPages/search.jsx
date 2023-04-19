import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  searchPropertiesFor,
  propertySelector,
} from "../../store/slices/propertySlice";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation } from "swiper";
import logo from "../../assets/logo.svg";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query }  = useParams(); 
  const dispatch = useDispatch();
  const inputRef = useRef(null); 
  const { matchedProperties } = useSelector(propertySelector);

  useEffect(() => {
    console.log(query); 
    dispatch(searchPropertiesFor(query));
    return () => {
      dispatch(clearState());
    };
  }, []);

  console.log(matchedProperties);

  return (
    <div className="p-6">
      <div className="w-full h-[600px] my-20 md:my-10">
        <div className="flex items-center gap-40">
          <a href="/"><img src={logo} alt="district 7 logo" className="w-56" /></a>
          <form className="flex gap-3 w-full ml-auto" onSubmit={e => {e.preventDefault(); location.href = `/search/${inputRef.current.value}`}}>
            <input ref={inputRef} defaultValue={query}
              type="text"
              placeholder="Search Houses With Locations"
              className="border w-full h-[45px] py-[10px] px-[20px] transition-all duration-500 ease-linear focus:outline-[#05c002] border-black"
            />
            <button className="py-0 px-[15px] h-[45px] border-none text-white flex items-center justify-center text-[25px] font-semibold bg-[#05c002] rounded">
              <BiSearch />
            </button>
          </form>
        </div>
        <div className="w-full my-4 px-0 md:px-12 md:pt-10 pb-20 md:pb-0">
          {matchedProperties?.map((property, index) => (
            <div
              className="grid xl:grid-cols-[320px_auto] grid-cols-1 xl:grid-rows-1 grid-rows-[300px_auto] w-full rounded-[20px] bg-[#D4EFD7] shadow-card  my-8"
              key={index}>
              <div className="relative rounded-[20px]">
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
                  <a className="text-primary-green underline" href="/user/explore">view more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
