import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Connect from "./connect";
import Sidebar from "../../components/Sidebar";
import UserDashboard from "./dash";
import Explore from "./explore";
import Settings from "./settings";
import { MdNotifications } from "react-icons/md";
import DashboardNavbar from "../../components/DashboardNavbar";
import Profile from "./profile";
import { userSideBarRoutes } from "../../routes";
import BottomNav from "../../components/BottomNav";
import MobileNav from "../../components/MobileNav";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/slices/authSlice";

const UserDashboardLayout = () => {
  const { isLandlord, user } = useSelector(userSelector);
  console.log(isLandlord);

  return (
    <div className="flex h-full">
      <div className="hidden md:block md:w-1/6 h-screen text-white p-4 pl-0">
        <Sidebar routes={userSideBarRoutes} />
      </div>
      <div className="w-full md:w-5/6 px-0 md:px-[60px] py-[54px]">
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <div className="block md:hidden">
          <MobileNav avatar={user?.avatar} />
          <BottomNav />
        </div>
        <Routes>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="connect" element={<Connect />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<MdNotifications />} />
          <Route path="profile" element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
