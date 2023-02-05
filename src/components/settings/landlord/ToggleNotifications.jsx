import React, { useState } from "react";

const ToggleNotifications = ({ onChange }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleToggleChange = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  return (
    <>
      <div className="font-header font-semibold text-base md:text-[18px] leading-[21.94px] text-black/90 mb-4 md:mb-6 px-7 md:px-1">
        Activate E-mail notification
      </div>
      <div className="flex justify-between px-7 md;px-8">
        <div className="font-header font-normal text-[12px] md:text-[18px] leading-[21.94px] text-[#333]">
          Receive our latests updates and house listings on your email
        </div>
        <div>
          <label className="relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-transparent border-[2px] border-solid border-[#05C002] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[3px] after:left-[5px]  peer-checked:after:bg-white after:bg-[#05C002] after:border-none after:border after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-[#05C002] peer-checked:border-none"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default ToggleNotifications;
