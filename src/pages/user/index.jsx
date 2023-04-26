import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUser, userSelector } from "../../store/slices/authSlice";
import withAuth from "../../middleware/isAuthenticated";
import ViewApartmentDetails from "./explore/viewApartmentDetails";

const UserDashboardLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(userSelector);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="flex h-full">
      <div className="hidden xl:block xl:max-w-[240px] w-full h-screen text-white p-4 pl-0">
        <Sidebar routes={userSideBarRoutes} />
      </div>
      <div className="flex-shrink px-0 xl:px-[60px] xl:py-14 py-24 w-full">
        <div className="hidden lg:block px-5">
          <DashboardNavbar user={user} />
        </div>
        <div className="block xl:hidden">
          <MobileNav avatar={user?.avatar} />
          <BottomNav />
        </div>
        <Routes>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="explore" element={<Explore userId={user?.id} />} />
          <Route path="property/:propId" element={<ViewApartmentDetails />} />
          <Route path="connect" element={<Connect />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<MdNotifications />} />
          <Route path="profile" element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

// const UserDashboardWithAuth = withAuth(UserDashboardLayout);
// export default UserDashboardWithAuth;
export default UserDashboardLayout;
