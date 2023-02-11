import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Explore = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    <div className="mt-8  md:mt-16 p-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
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
      </div>
      <div className="w-full h-[600px] mt-20">
        <div className="text-black text-[20px] md:text-[28px] font-header font-semibold">
          Featured Apartments
        </div>
        <div className="w-full grid grid-cols-3 my-4">
          <div className="h-[300px] rounded-[5px] bg-[#D4EFD7] shadow-card">
            <div className="h-1/2"></div>
            <div className="h-1/2 w-full p-4">
              <div className="flex flex-row gap-4 items-start my-3">
                <div className="w-1/4 text-black/70 font-header font-semibold text-[12px] leading-[14.63px]">
                  Description:
                </div>
                <div className="w-3/4 font-header text-[10px] font-normal text-black/70 leading-[12.19px]">
                  Hiiiiiii Thsndasubh
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start my-3">
                <div className="w-1/4 text-black/70 font-header font-semibold text-[12px] leading-[14.63px]">
                  Price:
                </div>
                <div className="w-3/4 font-header text-[10px] font-normal text-black/70 leading-[12.19px]">
                  Hiiiiiii Thsndasubh
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start my-3">
                <div className="w-1/4 text-black/70 font-header font-semibold text-[12px] leading-[14.63px]">
                  Location:
                </div>
                <div className="w-3/4 font-header text-[10px] font-normal text-black/70 leading-[12.19px]">
                  Hiiiiiii Thsndasubh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
