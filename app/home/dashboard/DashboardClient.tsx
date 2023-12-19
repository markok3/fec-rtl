"use client";
import React, { useEffect, useState } from "react";
import InfoCard from "./components/InfoCard";
import InfoCardList from "./components/InfoCardList";
import { DataTable } from "@/app/components/DataTable";
import CustomerActions from "./components/CustomerActions";
import Navbar from "../components/navbar/Navbar";
import DateSelect from "@/app/components/DateSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import LanguageSelect from "@/app/components/LanguageSelect";
import { User, userData } from "@/app/apiMock/apiMock";
// GET DATA FROM API
import { cardData } from "@/app/apiMock/apiMock";
import { applyDateFilter } from "@/app/utils/filterUtils";
import { FormattedMessage } from "react-intl";

const DashboardClient = () => {
  const [sortedData, setSortedData] = useState<User[]>([]);

  const handleDateChange = (date: string) => {
    console.log(date);

    let updatedSortedData = applyDateFilter(userData, date);
    applyFilters(updatedSortedData);
  };

  const applyFilters = (dataToFilter: User[]) => {
    setSortedData(dataToFilter);
  };

  useEffect(() => {
    // FETCH DATA FROM API
    setSortedData(userData);
  }, []);
  return (
    <div className="">
      {/* @ts-ignore */}
      <Navbar title="Hi Meshari, I hope you have a nice day">
        <DateSelect className="" onDateChange={handleDateChange} />
      </Navbar>
      <div className="w-full flex flex-col">
        <InfoCardList cardData={cardData} />
        <CustomerActions />
        <div className="px-10">
          <DataTable data={sortedData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
