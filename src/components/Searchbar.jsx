import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Searchbar = ({ onChange, value, placeholder, name }) => {
  return (
    <div className="relative rounded-md shadow-card border-none font-header flex flex-grow mx-8">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <RiSearchLine className="text-black text-[18px]" />
      </div>
      <input
        className="form-input py-4 pl-14 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-none outline-none focus:outline-none placeholder:text-black/60 placeholder:font-header placeholder:font-medium placeholder:text-[16px]"
        placeholder="Search Location"
      />
    </div>
  );
};

export default Searchbar;
