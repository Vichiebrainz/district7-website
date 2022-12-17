import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ChangePassword from "../../../components/settings/ChangePassword";
import LikedApartments from "../../../components/settings/LikedApartments";
import Report from "../../../components/settings/Report";
import ToggleNotifications from "../../../components/settings/ToggleNotifications";
import { Tab } from "../../../components/tab/Tab";
import { TabList } from "../../../components/tab/TabList";
import TabTitle from "../../../components/tab/TabTitle";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current tab from the URL query string
    const currentTab = new URLSearchParams(window.location.search).get("tab");

    // If a tab is specified in the query string, set it as the current tab
    if (currentTab) {
      setCurrentTab(currentTab);
    }
  }, []);

  // Update the URL query string when the current tab changes
  useEffect(() => {
    navigate(`?tab=${currentTab}`);
  }, [currentTab, navigate]);

  return (
    <>
      <div className="w-full flex flex-auto items center gap-8">
        <TabTitle
          title="Change Password"
          tab="password"
          onClick={() => setCurrentTab("password")}
          active={currentTab === "password"}
        />

        <TabTitle
          title="Notifications"
          tab="notifications"
          onClick={() => setCurrentTab("notifications")}
          active={currentTab === "notifications"}
        />

        <TabTitle
          title="Liked Apartments"
          tab="liked"
          onClick={() => setCurrentTab("liked")}
          active={currentTab === "liked"}
        />

        <TabTitle
          title="Report"
          tab="report"
          onClick={() => setCurrentTab("report")}
          active={currentTab === "report"}
        />

        <TabTitle
          title="Logout"
          tab="logout"
          onClick={() => setCurrentTab("logout")}
          active={currentTab === "logout"}
        />
      </div>

      <TabList>
        {currentTab === "password" && (
          <Tab>
            <ChangePassword />
          </Tab>
        )}

        {currentTab === "notifications" && (
          <Tab>
            <div className="px-4 py-8 w-full">
              <ToggleNotifications />
            </div>
          </Tab>
        )}

        {currentTab === "liked" && (
          <Tab>
            <LikedApartments />
          </Tab>
        )}

        {currentTab === "report" && (
          <Tab>
            <Report />
          </Tab>
        )}

        {currentTab === "logout" && (
          <Tab>
            <div>Logout</div>
          </Tab>
        )}
      </TabList>
    </>
  );
};

export default Settings;
