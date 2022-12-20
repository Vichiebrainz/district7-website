import React, { useState } from "react";
import { nigerianBanks } from "../../../data";
import { FiEdit3 } from "react-icons/fi";
import { FaSave } from "react-icons/fa";

const Account = () => {
  const [accountName, setAccountName] = useState("Adebowale Ayomikun");
  const [accountNumber, setAccountNumber] = useState("0530982451");
  const [bankName, setBankName] = useState("");
  const [editMode, setEditMode] = useState(false);

  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <div className="my-8">
        <div className="font-header font-semibold text-[18px] leading-[21.94px] text-black mb-7">
          Recipient Account
        </div>
        <div className="grid grid-cols-2 gap-8 items-center w-2/3">
          <div className="relative">
            <label
              htmlFor="current-password"
              className="block font-normal font-header text-black/60 text-[18px] leading-[21.94px] mb-3"
            >
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={accountName}
              onChange={(event) => setAccountName(event.target.value)}
              disabled={editMode}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="current-password"
              className="block font-normal font-header text-black/60 text-[18px] leading-[21.94px] mb-3"
            >
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
              value={accountNumber}
              onChange={(event) => setAccountNumber(event.target.value)}
              disabled={editMode}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="current-password"
              className="block font-normal font-header text-black/60 text-[18px] leading-[21.94px] mb-3"
            >
              Bank Name
            </label>
            <div class="relative flex-1">
              <select
                className="border border-[#92918F] border-solid form-input w-full mb-6 p-[18px] font-header font-normal text-[#252320] text-[18px] leading-[21.94px] rounded-[5px] "
                id="city"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                disabled={editMode}
              >
                <option value="" disabled hidden>
                  {" "}
                  Bank Name
                </option>
                {nigerianBanks.map((value, i) => (
                  <option value={value.name}>{value.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {editMode ? (
              <button
                className="flex gap-3 border-none font-header font-normal text-black/60 items-end hover:text-black hover:font-medium"
                onClick={changeEditMode}
              >
                <FiEdit3 size={30} />
                <span>Edit Account details</span>
              </button>
            ) : (
              <button
                className="flex gap-3 border-none font-header font-normal text-white items-end hover:shadow-lg hover:font-medium bg-[#068903] rounded-[5px] p-4"
                onClick={changeEditMode}
              >
                <FaSave size={24} />
                <span>Update details</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
