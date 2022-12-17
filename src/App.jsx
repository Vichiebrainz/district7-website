import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserDashboardLayout from "./pages/user";
import UserDashboard from "./pages/user/dash";
import Explore from "./pages/user/explore";
import Connect from "./pages/user/connect";
import Settings from "./pages/user/settings";
import LandlordDashboardLayout from "./pages/landlord";
import LandlordDashboard from "./pages/landlord/dash";
import LandlordPosts from "./pages/landlord/post";
import LandlordOrders from "./pages/landlord/orders";
import LandlordSettings from "./pages/landlord/settings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./pages/user/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user" element={<UserDashboardLayout />}>
            <Route path="dashboard" element={<UserDashboard />} />
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
