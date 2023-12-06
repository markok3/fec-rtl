"use client";
import React from "react";
import InfoCard from "./components/InfoCard";
import InfoCardList from "./components/InfoCardList";
import { DataTable } from "@/app/components/DataTable";
import CustomerActions from "./components/CustomerActions";

const DashboardClient = () => {
  return (
    <div className="">
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
