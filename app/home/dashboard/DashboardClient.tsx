"use client";
import React from "react";
import InfoCard from "./components/InfoCard";
import InfoCardList from "./components/InfoCardList";
import { DataTable } from "@/app/components/DataTable";
import CustomerActions from "./components/CustomerActions";
import Navbar from "../components/navbar/Navbar";
import DateSelect from "@/app/components/DateSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import LanguageSelect from "@/app/components/LanguageSelect";

// GET DATA FROM API
import { userData } from "@/app/apiMock/apiMock";
import { cardData } from "@/app/apiMock/apiMock";

const DashboardClient = () => {
  return (
    <div className="">
      {/* @ts-ignore */}
      <Navbar title="Hi Meshari, I hope you have a nice day"></Navbar>
      <div className="w-full flex flex-col">
        <InfoCardList cardData={cardData} />
        <CustomerActions />
        <div className="px-10">
          <DataTable data={userData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
