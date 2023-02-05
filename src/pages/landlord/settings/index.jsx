import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../../components/settings/landlord/Account";
import ChangePassword from "../../../components/settings/landlord/ChangePassword";
import ToggleNotifications from "../../../components/settings/landlord/ToggleNotifications";

import { Tab } from "../../../components/tab/Tab";
import { TabList } from "../../../components/tab/TabList";
import TabTitle from "../../../components/tab/TabTitle";
import Logout from "../../../components/settings/landlord/logout";

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
      <div className="w-full flex flex-auto items center gap-8 px-8 box-border flex-wrap mt-8">
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
          title="Account"
          tab="account"
          onClick={() => setCurrentTab("account")}
          active={currentTab === "account"}
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

        {currentTab === "account" && (
          <Tab>
            <Account />
          </Tab>
        )}

        {currentTab === "logout" && (
          <Tab>
            <Logout />
          </Tab>
        )}
      </TabList>
    </>
  );
};

export default Settings;
