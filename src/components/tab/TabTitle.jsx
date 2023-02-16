import React from "react";

const TabTitle = ({ title, onClick, active }) => {
  return (
    <div className="py-2">
      <button
        className={`cursor-pointer  px-4 py-2 font-medium text-[16  px] md:text-[20px] font-header flex w-full justify-center
          ${
            active
              ? " text-[#05C002]  bg-white text-center rounded-[8px]"
              : " text-white"
          }
        `}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default TabTitle;
