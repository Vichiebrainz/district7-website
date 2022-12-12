import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "../compoents/Sidebar";
import LandlordPosts from "./post";
import LandlordOrders from "./orders";
import LandlordSettings from "./settings";
import LandlordDashboard from "./dash";

const LandlordDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-[#068903]/20 text-white p-4">
        <Sidebar />
      </nav>
      <div className="w-5/6 p-4">
        <Routes>
          <Route path="/" element={<LandlordDashboard />} />
          <Route path="explore" element={<LandlordPosts />} />
          <Route path="connect" element={<LandlordOrders />} />
          <Route path="settings" element={<LandlordSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandlordDashboardLayout;
