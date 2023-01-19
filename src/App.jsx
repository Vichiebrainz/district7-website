import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastProvider } from "react-toast-notifications";
import ForgotPassword from "./pages/auth/forgotPassword";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <Router>
            <Routes>
              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="auth/forgot-password" element={<ForgotPassword />} />

              {/* <Route
                path="/"
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}
              > */}
              <Route path="user/*" element={<UserDashboardLayout />}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="explore" element={<Explore />} />
                <Route path="connect" element={<Connect />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              {/* </Route> */}

              <Route path="landlord" element={<LandlordDashboardLayout />}>
                <Route path="/landlord" element={<LandlordDashboard />} />
                <Route path="posts" element={<LandlordPosts />} />
                <Route path="orders" element={<LandlordOrders />} />
                <Route path="settings" element={<LandlordSettings />} />
              </Route>
            </Routes>
          </Router>
        </ToastProvider>
      </Provider>
    </>
  );
}

export default App;
