import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ChangePassword from "../../../components/settings/user/ChangePassword";
import LikedApartments from "../../../components/settings/user/LikedApartments";
import Report from "../../../components/settings/user/Report";
import ToggleNotifications from "../../../components/settings/user/ToggleNotifications";
import { Tab } from "../../../components/tab/Tab";
import { TabList } from "../../../components/tab/TabList";
import TabTitle from "../../../components/tab/TabTitle";
import Logout from "../../../components/settings/user/logout";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { settingsRoutes } from "../../../routes";

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
    if (currentTab) {
      navigate(`?tab=${currentTab}`);
    }
  }, [currentTab, navigate]);

  return (
    <>
      <div className="">
        {/* <div className="w-full flex-auto items center gap-8 hidden md:flex"> */}
        <div className="w-full md:w-fit md:flex flex-auto items-center justify-center gap-8 px-8 mt-10 bg-[#05C002] md:bg-[#068903] rounded-[8px] mx-auto mb-8 hidden">
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

        <div className="block md:hidden my-4 pt-6 px-6">
          <div
            className="flex text-left gap-1 items-center text-[#333] font-header mb-4"
            onClick={() => setCurrentTab("")}
          >
            <BiChevronLeft />
            <div className="text-[13px]">Back</div>
          </div>
          {!currentTab && (
            <>
              <div className="w-full flex justify-center font-header font-semibold text-[20px] text-[#333333] mb-8">
                Settings
              </div>

              <div className="my-2">
                {settingsRoutes.map((route, i) => (
                  <div
                    className="w-full flex items-center gap-3 rounded-[5px]  border-[0.5px] border-solid border-black/30 px-5 py-3 font-header my-5"
                    onClick={() => setCurrentTab(route.to)}
                    key={i}
                  >
                    <div className="">
                      <route.icon />
                    </div>
                    <div className="flex flex-grow text-[14px]">
                      {route.name}
                    </div>
                    <div>
                      <BiChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <TabList>
          {currentTab === "password" && (
            <Tab>
              <ChangePassword />
            </Tab>
          )}

          {currentTab === "notifications" && (
            <Tab>
              {/* <div className="px-4 md:py-8 w-full  "> */}
              <ToggleNotifications />
              {/* </div> */}
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
              <Logout />
            </Tab>
          )}
        </TabList>
      </div>
    </>
  );
};

export default Settings;
