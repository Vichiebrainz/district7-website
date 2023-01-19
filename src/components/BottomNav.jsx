import React, { useState } from "react";
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { BottomBarRoutes } from "../routes";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 w-full bg-[#fff] p-2 h-[60px] z-[9999] opacity-100 font-header">
      <div className="flex justify-around grid grid-cols-4">
        {BottomBarRoutes.map((route, i) => (
          <Link to={route.to} key={i}>
            <div
              key={i}
              className={`text-black/60 hover:text-indigo-600 text-center flex justify-center items-center flex-col ${
                activeIndex === 0 ? "" : ""
              }`}
            >
              <route.icon size={20} />
              <div className="text-[8px] font-normal mt-2">{route.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
