"use client";
import { DataTable } from "@/app/components/DataTable";
import DateSelect from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import React from "react";
import Navbar from "../components/navbar/Navbar";

import { IoExitOutline } from "react-icons/io5";
import ButtonWithIcon from "@/app/components/buttons/ButtonWithIcon";
import { title } from "process";
import GenderDropdown from "@/app/components/GenderDropdown";
import NameSortDropdown from "@/app/components/NameSortDropdown";
import PointssortPointsDropdown from "@/app/components/PointsSortDropdown";
import PointsSortPointsDropdown from "@/app/components/PointsSortDropdown";

const CustomersClient = () => {
  return (
    <div className="">
      <Navbar title="Customers">
        <ButtonWithIcon
          label="Export"
          Icon={IoExitOutline}
          className="px-4 py-2"
        />
        <PointsSortPointsDropdown className="w-20" />
        <NameSortDropdown className="w-20" />
        <GenderDropdown className="w-24" />
        <DateSelect />
      </Navbar>
      <div className="w-full flex flex-col">
        <div className="px-10 mt-4">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default CustomersClient;
