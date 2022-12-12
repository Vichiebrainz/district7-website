import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import UserDashboardLayout from "./user";
import UserDashboard from "./user/dash";
import Explore from "./user/explore";
import Connect from "./user/connect";
import Settings from "./user/settings";
import LandlordDashboardLayout from "./landlord";
import LandlordDashboard from "./landlord/dash";
import LandlordPosts from "./landlord/post";
import LandlordOrders from "./landlord/orders";
import LandlordSettings from "./landlord/settings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./user/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user" element={<UserDashboardLayout />}>
            <Route path="/user" element={<UserDashboard />} />
            <Route path="explore" element={<Explore />} />
            <Route path="connect" element={<Connect />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="landlord" element={<LandlordDashboardLayout />}>
            <Route path="/landlord" element={<LandlordDashboard />} />
            <Route path="posts" element={<LandlordPosts />} />
            <Route path="orders" element={<LandlordOrders />} />
            <Route path="settings" element={<LandlordSettings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
