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

const DashboardClient = () => {
  return (
    <div className="">
      <Navbar title="Hi Meshari, I hope you have a nice day">
        <DateSelect />
        <DarkModeSwitch />
        <LanguageSelect />
      </Navbar>
      <div className="w-full flex flex-col">
        <InfoCardList />
        <CustomerActions />
        <div className="px-10">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
