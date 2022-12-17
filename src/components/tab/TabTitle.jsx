import React from "react";

const TabTitle = ({ title, onClick, active }) => {
  return (
    <div>
      <button
        // className={currentTab === "tab1" ? "active" : ""}
        className={`cursor-pointer pl-0 px-4 py-2 font-medium text-[20px] font-header
          ${active ? " text-[#05C002] underline" : " text-black/60"}
        `}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default TabTitle;
