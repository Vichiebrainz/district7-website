import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaCaretDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Map from "../../compoents/GoogleMaps";
import mapDummy from "../../assets/Map of Birmingham (City).png";

const Explore = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    <div className="mt-16">
      <div className="flex gap-16">
        <div class="relative flex-1">
          <select
            class="block appearance-none w-full bg-white border-[1.5px] border-black/60 hover:border-black/60 px-4 py-4 pr-8 rounded shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
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
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div class="relative flex-1">
          <select
            class="block appearance-none w-full bg-white border-[1.5px] border-black/60 hover:border-black/60 px-4 py-4 pr-8 rounded shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
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
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div class="relative flex-1">
          <select
            class="block appearance-none w-full bg-white border-[1.5px] border-black/60 hover:border-black/60 px-4 py-4 pr-8 rounded shadow  focus:outline-none focus:shadow-outline font-header font-medium text-black/60 text-[18px] leading-[21.94px]"
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
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/60">
            <FaCaretDown />
          </div>
        </div>

        <div class="relative flex-1">
          <button className="w-full bg-[#068903] rounded-[5px] capitalize text-[18px] leading-[21.94px] font-header font-medium text-white flex justify-center items-center gap-4 p-4">
            <span>
              <BiSearch fontSize={24} />
            </span>
            <span>Explore</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[600px] mt-20">
        {/* <Map center={{ lat: -34.397, lng: 150.644 }} zoom={8} /> */}
        <img
          src={mapDummy}
          className="w-full h-full object-cover rounded-[8px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Explore;
