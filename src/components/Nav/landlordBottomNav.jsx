import React, { useState, useEffect } from "react";
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { landlordSideBarRoutes } from "../../routes";

const LandlordBottomNav = () => {
  let location = useLocation();
  const [activeIndex, setActiveIndex] = useState();

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Get the current tab from the URL query string
    const activeIndex = location.pathname.slice(6);

    // If a tab is specified in the query string, set it as the current tab
    if (activeIndex) {
      setActiveIndex(activeIndex);
    }
  }, []);

  return (
    <div className="fixed bottom-0 w-full bg-[#D4EFD7] h-[60px] z-[9999] opacity-100 font-header">
      <div
        className={`justify-around grid grid-cols-${landlordSideBarRoutes.length} items-center h-full`}
      >
        {landlordSideBarRoutes.map((route, i) => (
          <Link to={route.to} key={i}>
            <div
              key={i}
              className={`text-black/60 hover:text-white text-center flex justify-center items-center flex-col py-[6px] h-full mx-2 rounded-md ${
                route.to.startsWith(location.pathname.slice(10))
                  ? "bg-[#05C002] text-white"
                  : "text-black/60"
              }`}
              onClick={() => handleTabClick(route.name)}
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

export default LandlordBottomNav;
