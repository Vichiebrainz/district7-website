import React, { useState } from "react";

export const TabList = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" ">
      <div className="flex gap-10">
        {React.Children.map(children, (child, index) => (
          <div
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer pl-0 px-4 py-2 font-medium text-[20px] font-header ${
              index === activeIndex
                ? "text-[#05C002] underline"
                : "text-black/60"
            }`}
          >
            {/* {child.props.title} */}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {React.Children.toArray(children)[activeIndex]}
      </div>
    </div>
  );
};
