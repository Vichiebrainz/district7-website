import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tab } from "../../../components/tab/Tab";
import { TabList } from "../../../components/tab/TabList";
import TabTitle from "../../../components/tab/TabTitle";

import Form from "./Form";
import PostedApartments from "./PostedApartments";

const LandlordPosts = () => {
  const [currentTab, setCurrentTab] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentTab = new URLSearchParams(window.location.search).get("tab");
    if (currentTab) setCurrentTab(currentTab);
  }, []);

  useEffect(() => {
    navigate(`?tab=${currentTab}`);
  }, [currentTab, navigate]);

  return (
    <div className="px-6 w-full justify-center  ">
      <div className="w-full md:w-fit flex flex-auto items-center justify-center gap-8 px-8 mt-10 bg-[#05C002] md:bg-[#068903] rounded-[8px] mx-auto mb-8">
        <TabTitle
          title="Form"
          tab="form"
          onClick={() => setCurrentTab("form")}
          active={currentTab == "form"}
        />
        <TabTitle
          title="Posted apartments"
          tab="postedApartments"
          onClick={() => setCurrentTab("postedApartments")}
          active={currentTab == "postedApartments"}
        />
      </div>
      <TabList>
        {currentTab == "form" && (
          <Tab>
            <Form />
          </Tab>
        )}
        {currentTab == "postedApartments" && (
          <Tab>
            <PostedApartments />
          </Tab>
        )}
      </TabList>
    </div>
  );
};

export default LandlordPosts;
