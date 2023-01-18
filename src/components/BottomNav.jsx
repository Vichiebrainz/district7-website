import React, { useState } from "react";
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa";

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 w-full bg-[#068903]/20 p-2">
      <div className="flex justify-around">
        <div
          className={`text-gray-600 hover:text-indigo-600 ${
            activeIndex === 0 ? "text-indigo-600" : ""
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <FaHome size={22} />
        </div>
        <div
          className={`text-gray-600 hover:text-indigo-600 ${
            activeIndex === 1 ? "text-indigo-600" : ""
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <FaSearch size={22} />
        </div>
        <div
          className={`text-gray-600 hover:text-indigo-600 ${
            activeIndex === 2 ? "text-indigo-600" : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          <FaHeart size={22} />
        </div>
        <div
          className={`text-gray-600 hover:text-indigo-600 ${
            activeIndex === 3 ? "text-indigo-600" : ""
          }`}
          onClick={() => setActiveIndex(3)}
        >
          <FaUser size={22} />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
