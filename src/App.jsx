import { useState, useEffect } from "react";
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
import { Toaster } from "react-hot-toast";
import UpdateProperty from "./pages/landlord/updateProperty";
import ReactGA from "react-ga";
import Contact from "./pages/landingPages/contact";
import Search from "./pages/landingPages/search";
import Services from "./pages/landingPages/services";
import About from "./pages/landingPages/About";
import ViewApartmentDetails from "./pages/user/explore/viewApartmentDetails";

const TRACKING_ID = "UA-192954122-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "font-header",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <ToastProvider>
        <Routes>
          {/* HOME ROUTE */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/services" element={<Services />} />

          {/* AUTH ROUTES */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />

          {/* PRIVATE ROUTES USER AND LANDLORD */}
          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
            <Route path="user/*" element={<UserDashboardLayout />}>
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="explore" element={<Explore />} />
              <Route
                path="property/:propId"
                element={<ViewApartmentDetails />}
              />
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
            <Route path="post/:id/update" element={<UpdateProperty />} />
          </Route>
        </Routes>
      </ToastProvider>
    </>
  );
}

export default App;
