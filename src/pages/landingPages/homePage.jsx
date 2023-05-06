import React, { useRef } from "react";
import stayHappy from "../../assets/stayhappy.jpg";
import Footer from "../../components/landingPages/footer";
import { BiSearch } from "react-icons/bi";
// import Navbar from "../../components/landingPages/navbar";
import "./homePage.css";
import Navbar from "../../components/landingPages/navbar/nav2";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
function Home() {
  const { isLandlord, isLoggedIn } = useSelector(userSelector);
  const inputRef = useRef(null); 
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar  */}
      <Navbar />
      {/* // Showcase Section  */}
      <div className="h-screen w-full bg-header bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center">
        <form className="w-[80%] md:w-[70%] flex justify-between my-12 md:my-0" onSubmit={e => {e.preventDefault(); location.href = `/search/${inputRef.current.value}`}}>
          <input ref={inputRef} required
            type="text"
            placeholder="Search Houses With Locations"
            className="w-[90%] h-[45px] py-[10px] px-[20px] transition-all duration-500 ease-linear focus:outline-[#05c002]"
          />
          <button className="py-0 px-[15px] h-[45px] border-none text-white flex items-center justify-center text-[25px] font-semibold bg-[#05c002] rounded">
            <BiSearch />
          </button>
        </form>

        <div className="w-full p-8 d-flex flex-col items-center justify-center text-center">
          <h1 className="text-[42px] md:text-[64px] text-white font-bold font-header">
            Find Apartments and get Your{" "}
            <span className="text-[#05c002]">Dream Spaces</span>
          </h1>
          <p className="text-[12px] md:text-[16px] font-header font-normal mt-[20px] mb:mt-[30px] text-white">
            We provide access to thousands of house listings across Nigeria. The
            easiest way to secure suitable accommodation.
          </p>
        </div>
      </div>

      {/* What We Offer Section  */}
      <div className="h-full py-[50px] flex flex-col items-center justify-center">
        <h1 className="font-header text-[30px] md:text-[40px] font-semibold">
          What we offer
        </h1>
        <div className="flex-wrap w-[80%] my-8 flex items-center justify-center">
          <div className="bg-black flex flex-col items-start justify-center px-8 py-3 m-[20px] w-[300px] h-[230px] font-header">
            <h3 className="text-[#05d901] font-semibold text-[20px] ">
              Stress free
            </h3>
            <p className="text-[15px] font-normal text-[#ffffffb2]">
              Enjoy the ease of thousands of home listings all at your
              fingertips
            </p>
          </div>
          <div className="bg-black flex flex-col items-start justify-center px-8 py-3 m-[20px] w-[300px] h-[230px] font-header">
            <h3 className="text-[#05d901] font-semibold text-[20px] ">
              Affordable
            </h3>
            <p className="text-[15px] font-normal text-[#ffffffb2]">
              Access dream spaces without breaking the bank.
            </p>
          </div>
          <div className="bg-black flex flex-col items-start justify-center px-8 py-3 m-[20px] w-[300px] h-[230px] font-header">
            <h3 className="text-[#05d901] font-semibold text-[20px] ">
              High Quality
            </h3>
            <p className="text-[15px] font-normal text-[#ffffffb2]">
              Get value for your money, and kiss discomfort goodbye.
            </p>
          </div>
          <div className="bg-black flex flex-col items-start justify-center px-8 py-3 m-[20px] w-[300px] h-[230px] font-header">
            <h3 className="text-[#05d901] font-semibold text-[20px] ">
              Secured Transaction
            </h3>
            <p className="text-[15px] font-normal text-[#ffffffb2]">
              All house listings are verified to ensure safe and secure
              transactions.
            </p>
          </div>
          <div className="bg-black flex flex-col items-start justify-center px-8 py-3 m-[20px] w-[300px] h-[230px] font-header">
            <h3 className="text-[#05d901] font-semibold text-[20px] ">
              Comfort
            </h3>
            <p className="text-[15px] font-normal text-[#ffffffb2]">
              Make and house memories in homes tailored to suit you and your
              family.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-12">
          <button
            onClick={() => navigate("/signup")}
            className="border-none flex bg-[#05c002] w-full md:w-[30%] py-[10px] font-header  text-white text-[20px] font-semibold mt-[20px] justify-center items-center rounded">
            Get Started
          </button>
          <span className="font-header text-[10px] font-normal mt-[10px]">
            {/* Join our waitlist to know when we go live */}
          </span>
        </div>
      </div>

      {/* Stay Happy Section  */}
      <div className="h-full w-full my-[50px] flex flex-col md:flex-row items-center justify-center gap-4 p-12">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={stayHappy}
            alt=""
            className="w-full md:w-[80%] object-cover"
          />
        </div>
        <div className="flex-1 flex items-center place-content-center">
          <div>
            <h1 className="font-header text-[30px] md:text[50px] font-semibold mb-2">
              Refunds? Not a Problem
            </h1>
            <p className="text-[15px] font-header font-normal my-8 text-justify">
              Get refunded within 48 hours if you're not satisfied with any of
              our houses.
            </p>
            <div className="font-header w-full ">
              <button
                // onClick={() => navigate("/signup")}
                className="border-none flex justify-center items-center bg-[#05c002] w-full md:w-fit py-[10px] px-5 whitespace-nowrap font-header  text-white text-[20px] font-semibold mt-[20px] shadow-md mb-2 rounded">
                Request refund
              </button>
              <span className="font-header text-[10px] font-normal mt-[10px] text-center md:text-left">
                {/* Join our waitlist to know when we go live */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Find the best tenants Section  */}
      <div className="h-[90vh]  w-full bg-no-repeat bg-cover bg-center bg-best-tenants flex flex-col items-center box-border">
        <div className="w-[80%] mt-[50px] mb-[30px]">
          <h2 className="font-header text-[28px] font-semibold text-[#05c002] leading-[34.13px]">
            Agents & Landlords
          </h2>
        </div>
        <div className="min-h-[70vh] !w-full flex items-center justify-center">
          <div className="w-[80%] md:w-[55%] flex flex-col justify-center align-center">
            <h1 className="font-header text-[42px] md:text-[64px] md:leading-[78.02px] font-bold text-center text-white">
              Find the best <span className="text-[#05c002]">Tenants</span> for
              Your Houses listed
            </h1>
            <p className="font-header text-[12px] md:text-[18px] font-normal text-[#e6e6e6] my-[14px] text-center">
              Get access to thousands of potential tenants for your houses, and
              property. Join a community of Agents and Landlords like yourself.
            </p>
            <div className="w-full flex flex-col items-center justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="border-none flex justify-center items-center bg-[#05c002] w-full md:w-[30%] py-[10px] font-header  text-white text-[20px] font-semibold mt-[20px] rounded">
                Get Started
              </button>
              <span className="font-header text-[10px] font-normal text-[#e6e6e6] mt-[10px]">
                {/* Join our waitlist to know when we go live */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default Home;
