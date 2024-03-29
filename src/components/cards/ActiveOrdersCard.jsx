import { returnRandomImage } from '../../helper/randomizeProfilePictures';

export default function PostedApartmentsCard({ imageUrl, description, price, location, tenant }) {
  return (
    <div className="relative bg-[#068903]/5 rounded-[20px] overflow-hidden shadow-card flex my-16">
      <img
        className="w-1/4 h-auto object-cover rounded-[20px]"
        src={imageUrl}
        alt="Apartment"
      />
      <div className="px-8 py-8 w-3/4">
        <div className="flex gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Description:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {description}
          </div>
        </div>
        <div className="flex gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Price:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {price}
          </div>
        </div>
        <div className="flex gap-4 items-start mb-8">
          <div className="basis-1/4 text-[18px] leading-[21.94px] text-black/70 font-header font-semibold">
            Location:
          </div>
          <div className="basis-3/4 text-[16px] leading-[21.94px] text-black/70 font-header font-normal">
            {location}
          </div>
        </div>
        <div className="flex items-start mb-8">
          <img
            className="w-12 h-12 rounded-full mr-4 border-2 border-solid border-[#05C002]"
            src={returnRandomImage()}
            alt="User avatar"
          />
          <figcaption className='font-[Montserrat]'>
            <div className='font-[600]'>Tenant</div>
            <div>{ tenant }</div>
          </figcaption>
        </div>
        <div className="purchase-now flex justify-end">
          <button className="bg-[#068903] text-white text-[18px] leading-[21.94px] font-header font-semibold rounded-[5px] p-4 py-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
