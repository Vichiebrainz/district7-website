import React, { useState } from "react";

const ToggleNotifications = ({ onChange }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleToggleChange = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  return (
    <>
      <div className="font-header font-semibold text-[18px] leading-[21.94px] text-black/90 mb-6">
        Activate E-mail notification
      </div>
      <div className="flex justify-between">
        <div className="font-header font-normal text-[18px] leading-[21.94px] text-black/90">
          Receive our latests updates and house listings on your email
        </div>
        <label class="relative items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-14 h-7 bg-transparent border-[2px] border-solid border-[#05C002] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-black/70 after:border-none after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#05C002] peer-checked:border-none"></div>
        </label>
      </div>
    </>
  );
};

export default ToggleNotifications;
