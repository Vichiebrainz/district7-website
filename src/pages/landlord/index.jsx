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

const LandlordDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-[#068903]/20 text-white p-4 pl-0">
        <Sidebar routes={landlordSideBarRoutes} />
      </nav>
      <div className="w-5/6 px-[60px] py-[54px]">
        <DashboardNavbar />
        <Routes>
          <Route path="/" element={<LandlordDashboard />} />
          <Route path="explore" element={<LandlordPosts />} />
          <Route path="connect" element={<LandlordOrders />} />
          <Route path="settings" element={<LandlordSettings />} />
          <Route path="notifications" element={<Notifiicattions />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandlordDashboardLayout;
