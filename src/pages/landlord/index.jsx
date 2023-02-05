import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import LandlordPosts from "./post";
import LandlordOrders from "./orders";
import LandlordSettings from "./settings";
import LandlordDashboard from "./dash";
import { landlordSideBarRoutes } from "../../routes";
import DashboardNavbar from "../../components/DashboardNavbar";
import Notifications from "./Notifications";
import MobileNav from "../../components/MobileNav";
import LandlordBottomNav from "../../components/Nav/landlordBottomNav";
import Profile from "./profile";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/slices/authSlice";

const LandlordDashboardLayout = () => {
  const { isLandlord, user } = useSelector(userSelector);

  return (
    <div className="flex h-full">
      <nav className="hidden md:block md:w-1/6 h-screen text-white p-4 pl-0">
        <Sidebar routes={landlordSideBarRoutes} />
      </nav>
      <div className="w-full md:w-5/6 px-0 md:px-[60px] py-[54px]">
        <div className="hidden md:block">
          <DashboardNavbar />
        </div>
        <div className="block md:hidden">
          <MobileNav />
          <LandlordBottomNav />
        </div>
        <Routes>
          <Route path="dashboard" element={<LandlordDashboard />} />
          <Route path="posts" element={<LandlordPosts />} />
          <Route path="orders" element={<LandlordOrders />} />
          <Route path="settings" element={<LandlordSettings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandlordDashboardLayout;
