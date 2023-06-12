import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export default function PostedApartmentsCard({
  imageUrl,
  description,
  price,
  location,
  id,
  isRemoving,
  handleRemoveApartment,
}) {
  const navigate = useNavigate();
  console.log(imageUrl);
  return (
    <div className="relative md:h-[300px] w-full h-full bg-[#068903]/5 rounded-[20px] overflow-hidden shadow-card flex flex-col md:flex-row my-16 ">
      {/* <img
        className="md:w-1/4 w-full h-auto object-cover rounded-[20px]"
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
      <div className="px-8 py-8 w-full md:w-3/5">
        <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Description:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {description}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Price:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            N {price}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Location:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {location}
          </div>
        </div>
        <div className="purchase-now flex justify-end gap-5">
          <button
            className="bg-transparent border border-[#92918F] border-solid p-2 font-header font-normal text-[#252320] text-[18px] rounded-[5px]"
            onClick={() => handleRemoveApartment(id)}>
            {isRemoving && <DotLoader color="#000" size={21} />}
            {!isRemoving && "Remove"}
          </button>
          <button
            className="bg-[#068903] text-white text-[18px] leading-[21.94px] font-header font-semibold rounded-[5px] p-4 py-2"
            onClick={() => navigate(`/landlord/post/${id}/update`)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
