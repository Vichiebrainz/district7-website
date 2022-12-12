import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Connect from "./connect";
import Sidebar from "../compoents/Sidebar";
import UserDashboard from "./dash";
import Explore from "./explore";
import Settings from "./settings";
import { MdNotifications } from "react-icons/md";
import DashboardNavbar from "../compoents/DashboardNavbar";
import Profile from "./profile";
import { userSideBarRoutes } from "../routes";

const UserDashboardLayout = () => {
  return (
    <div className="flex h-full">
      <nav className="w-1/6 bg-[#068903]/20 text-white p-4 pl-0">
        <Sidebar routes={userSideBarRoutes} />
      </nav>
      <div className="w-5/6 px-[60px] py-[54px]">
        <DashboardNavbar />
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="connect" element={<Connect />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<MdNotifications />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
