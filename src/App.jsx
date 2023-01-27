import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

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

import PrivateRoute from "./middleware/privateRoute";
import { ToastProvider } from "react-toast-notifications";
import ForgotPassword from "./pages/auth/forgotPassword";
import { userSelector } from "./store/slices/authSlice";
import Home from "./pages/landingPages/homePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isLoggedIn } = useSelector(userSelector);

  console.log(useSelector(userSelector));

  return (
    <>
      <ToastProvider>
        <Router>
          <Routes>
            {/* HOME ROUTE */}
            <Route path="/" element={<Home />} />

            {/* AUTH ROUTES */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="auth/forgot-password" element={<ForgotPassword />} />

            {/* PRIVATE ROUTES USER AND LANDLORD */}
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isLoggedIn} />}
            >
              <Route path="user/*" element={<UserDashboardLayout />}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="explore" element={<Explore />} />
                <Route path="connect" element={<Connect />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
            <Route path="landlord/*" element={<LandlordDashboardLayout />}>
              <Route path="dashboard" element={<LandlordDashboard />} />
              <Route path="posts" element={<LandlordPosts />} />
              <Route path="orders" element={<LandlordOrders />} />
              <Route path="settings" element={<LandlordSettings />} />
            </Route>
          </Routes>
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
