import React from "react";
import { FiEdit3 } from "react-icons/fi";

const Report = () => {
  return (
    <div className="my-10 flex flex-col justify-between h-[65vh]">
      <div className="text-[#333333]/60 leading-[19.5px] text-[16px] font-header font-normal my-2">
        If our automated responses are not suffecient for your answers, you can
        leave a message and our team is available to get to them as soon as we
        can
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center p-[22px]">
          General Enquiry
        </div>
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center p-[22px]">
          Fraud
        </div>
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center p-[22px]">
          Poor Quality
        </div>
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center p-[22px]">
          Refund
        </div>
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center p-[22px]">
          Security Reports
        </div>
        <div className="text-[#333333]/70 leading-[24px] text-[16px] font-header font-medium border border-solid border-transparent rounded-[10px] rounded-br-[2px] flex justify-center items-center gap-2 p-[22px]  underline ">
          <FiEdit3 />
          <span>Customize message</span>
        </div>
      </div>
    </div>
  );
};

export default Report;
