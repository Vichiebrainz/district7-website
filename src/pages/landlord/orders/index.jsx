import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tab } from "../../../components/tab/Tab";
import { TabList } from "../../../components/tab/TabList";
import TabTitle from "../../../components/tab/TabTitle";

import ActiveOrders from "./ActiveOrders";
import ConcludedOrders from "./ConcludedOrders";

const LandlordOrders = () => {
  const [ currentTab, setCurrentTab ] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentTab = new URLSearchParams(window.location.search).get("tab");
    if (currentTab) setCurrentTab(currentTab);
  }, []);

  useEffect(() => {
    navigate(`?tab=${currentTab}`);
  }, [currentTab, navigate]);
  
  return (
    <>
      <div className="w-full flex flex-auto items center gap-8">
        <TabTitle title="Active Orders" tab="active" onClick={() => setCurrentTab("active")} active={currentTab == "active"} />
        <TabTitle title="Concluded orders" tab="concluded" onClick={() => setCurrentTab("concluded")} active={currentTab == "concluded"} />
      </div>
      <TabList>
        {
          currentTab == "active" && 
          <Tab>
            <ActiveOrders />
          </Tab>
        }
        {
          currentTab == "concluded" && 
          <Tab>
            <ConcludedOrders />
          </Tab>
        }
      </TabList>
    </>
  );
};

export default LandlordOrders;
