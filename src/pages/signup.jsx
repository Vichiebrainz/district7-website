import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [bank, setbank] = useState("");
  const [bankname, setbankname] = useState("");

  function handleSubmit() {}

  function handleInputChange() {}
  return (
    <div className="grid-container grid grid-cols-2 h-screen">
      <div className="form flex flex-col items-center justify-center">
        <div className="form-body w-full max-w-[450px] flex flex-col justify-center pb-[75px]">
          <div className="bg-white font-semibold m-8 text-3xl text-primary-green font-header mb-[81px]">
            <p className="page-title">Sign up</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="firstname font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="firstname">
                  Firstname{" "}
                </label>
              </div>
              <input
                type="name"
                id="name"
                className="form-input py-3 px-7 mb-[30px]"
                value={name}
                onChange={(e) => handleInputChange(e)}
                placeholder="First name"
              />
            </div>
            <div className="lastname font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="lastname">
                  Lastname{" "}
                </label>
              </div>
              <input
                type="name"
                id="name"
                className="form-input py-3 px-7 mb-[30px]"
                value={name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="phone font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="phone">
                Phone{" "}
              </label>
            </div>
            <input
              type="phone"
              id="phone"
              className="form-input py-3 px-7 mb-[30px]"
              value={name}
              onChange={(e) => handleInputChange(e)}
              placeholder="07012345678"
            />
          </div>
          <div className="email font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="email">
                Email{" "}
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="form-input py-3 px-7 mb-[30px]"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="weatdistrict7@gmail.com"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bank font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="bank">
                  Bank Account{" "}
                </label>
              </div>
              <input
                type="name"
                id="name"
                className="form-input py-3 px-7 mb-[30px]"
                value={name}
                onChange={(e) => handleInputChange(e)}
                placeholder="08978976"
              />
            </div>
            <div className="bankname font-body">
              <div className="label-wrapper">
                <label className="form-label" htmlFor="bankname">
                  Bank name{" "}
                </label>
              </div>
              <select
                name="bankname"
                id="bankname"
                className="form-input py-3 px-7 mb-[30px]"
              >
                <option value="">First Bank</option>
                <option value="">Union Bank</option>
                <option value="">GTBank</option>
                <option value="">Access Bank</option>
                <option value="">FCMB</option>
                <option value="">First Bank</option>
                <option value="">UBA</option>
                <option value="">Zenith Bank</option>
              </select>
            </div>
          </div>
          <div className="location font-body">
            <div className="label-wrapper">
              <label className="form-label" htmlFor="location">
                Location{" "}
              </label>
            </div>
            <input
              className="form-input py-3 px-7 mb-[30px]"
              type="location"
              id="location"
              value={location}
              onChange={(e) => handleInputChange(e)}
              placeholder=""
            />
          </div>
          <div>
            <button
              className="footer p-[22px] text-white bg-primary-green w-full rounded-[5px]"
              onClick={() => handleSubmit()}
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="background-image min-h-screen">
        <img className="bg-img w-full h-full" src="/background-image.png"></img>
        <div className="content py-12 lg:py-24 px-20 flex flex-col justify-between h-full">
          <p className="font-header max-w-[418px] text-[50px] leading-[61px] text-white">
            Secure the best accomodations with us
          </p>
          <img src="/district-logo.svg" alt="" className="relative w-[324px]" />
        </div>
      </div>
    </div>
  );
}
export default Signup;
