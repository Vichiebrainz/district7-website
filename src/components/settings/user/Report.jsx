import React from "react";
import { FiEdit3 } from "react-icons/fi";

const reportTemplates = [
  { id: 1, name: "General Enquiry" },
  { id: 2, name: "Fraud" },
  { id: 3, name: "Poor Quality" },
  { id: 4, name: "Refund" },
  { id: 5, name: "Security Reports" },
];
const Report = () => {
  return (
    <div className="my-0 md:my-10 flex flex-col justify-between h-[65vh] px-6">
      <div>
        <div className="my-0 md:my-16 text-black text-[18px] md:text-[24px] leading-[29.26px] font-semibold font-header text-center md:text-left">
          Report
        </div>
        <div className="text-[#333333]/60 leading-[19.5px] text-[12px] md:text-[16px] font-header font-normal my-2">
          If our automated responses are not sufficient for your answers, you
          can leave a message and our team is available to get to them as soon
          as we can
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reportTemplates.map((item, i) => (
          <div
            className="text-[#333333]/70 leading-[24px] text-[12px] md:text-[16px] font-header font-medium border border-solid border-[#333333]/50 rounded-[10px] rounded-br-[2px] flex justify-center md:p-[22px] py-4"
            key={i}
          >
            {item.name}
          </div>
        ))}

        <div className="text-[#333333]/70 leading-[24px] text-[12px] md:text-[16px] font-header font-normal border border-solid border-transparent rounded-[15px] rounded-br-[2px] flex justify-center items-center gap-2 md:p-[22px]  underline ">
          <FiEdit3 />
          <span>Custom message </span>
        </div>
      </div>
    </div>
  );
};

export default Report;
