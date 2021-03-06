import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchPage from "../pages/SearchPage";
import LettersNumbersPage from "../pages/LettersNumbersPage";
import MorsePage from "../pages/MorsePage";

const tabsConfig = [
  {
    tabName: "search",
    tabContent: <SearchPage />,
  },
  {
    tabName: "numberLetters",
    tabContent: <LettersNumbersPage />,
  },
  {
    tabName: "morse",
    tabContent: <MorsePage />,
  },
];

const RiddleTabs = () => {
  const navigate = useNavigate();

  const { tabName = "search" } = useParams();

  const tabIndex = useMemo(
    () => tabsConfig.findIndex((tab) => tab.tabName === tabName),
    [tabName]
  );

  return (
    <>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={tabIndex}
        onChange={(e, newValue) => navigate(`/${tabsConfig[newValue].tabName}`)}
        aria-label="basic tabs example"
      >
        <Tab label="Search" id="search" />
        <Tab label="Numbers-Letters" id="numberLetters" />
        <Tab label="Morse" id="morse" />
      </Tabs>
      {tabsConfig[tabIndex].tabContent}
    </>
  );
};

export default RiddleTabs;
