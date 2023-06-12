import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

function ApartmentCard({ imageUrl, description, price, location }) {
  return (
    <div className="relative md:h-[300px] w-full h-full bg-[#068903]/5 rounded-[20px] overflow-hidden shadow-card flex flex-col md:flex-row my-16">
      {/* <img
        className="w-1/4 h-auto object-cover rounded-[20px]"
        src={imageUrl}
        alt="Apartment"
      /> */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="w-full md:w-2/5 h-full">
        {imageUrl?.map((image, i) => (
          <SwiperSlide className="h-full w-full" key={i}>
            <img
              src={image.image}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-8 py-8 w-full md:w-3/4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Description:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {description.slice(0, 5)}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Price:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {price}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Location:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {location}
          </div>
        </div>
        <div className="purchase-now flex justify-end">
          <button className="bg-[#068903] text-white text-[18px] leading-[21.94px] font-header font-semibold rounded-[5px] p-4 py-2">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
