import React from "react";
import ChangePassword from "../../compoents/settings/ChangePassword";
import LikedApartments from "../../compoents/settings/LikedApartments";
import ToggleNotifications from "../../compoents/settings/ToggleNotifications";
import { Tab } from "../../compoents/tab/Tab";
import { TabList } from "../../compoents/tab/TabList";

const Settings = () => {
  return (
    <TabList>
      <Tab title="Password">
        <ChangePassword />
      </Tab>
      <Tab title="Notifications">
        <div className="px-4 py-8 w-full">
          <ToggleNotifications />
        </div>
      </Tab>
      <Tab title="Liked Apartments">
        <LikedApartments />
      </Tab>
      <Tab title="Report">Tab 3 content</Tab>
      <Tab title="Logout">Tab 3 content</Tab>
    </TabList>
  );
};

export default Settings;
