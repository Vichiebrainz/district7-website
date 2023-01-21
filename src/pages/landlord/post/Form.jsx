export default function Form() {
  const labelStyles = "block font-normal font-header text-black/60 text-[16px] leading-[19.5px] mb-3";
  const inputStyles = "border border-[#92918F] border-solid form-input mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px]"
  return (
    <form className="px-32">
      <div className="flex gap-20">
        <label className="flex-1">
          <span className={labelStyles}>Apartment type</span>
          <input type="text" placeholder="2 bedroom flat" className={inputStyles} />
        </label>
        <label className="flex-1">
          <span className={labelStyles}>Apartment value</span>
          <input type="number" placeholder="fill in amount" className={inputStyles} />
        </label>
      </div>
      <label>
        <span className={labelStyles}>Location</span>
        <input type="text" className={inputStyles} placeholder="fill in your address" />
      </label>
      <label>
        <span className={labelStyles}>Upload image</span>
        <input type="file" className="hidden" />
        <div className={inputStyles + " text-gray-400 cursor-pointer"}>Upload image for proof</div>
      </label>
      <label>
        <span className={labelStyles}>Brief Description</span>
        <textarea className={inputStyles} placeholder="fill in your address"></textarea>
      </label>
      <label>
        <span className={labelStyles}><span className="text-red-700">*</span> Date of posting</span>
        <input className={inputStyles + " text-gray-400 uppercase max-w-[30rem]"} type="date" />
      </label>
      <button type="submit" className="block ml-auto bg-[#05C002] md:bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white justify-center items-center gap-4 py-4 px-12 w-fit">Submit</button>
    </form>
  );
}