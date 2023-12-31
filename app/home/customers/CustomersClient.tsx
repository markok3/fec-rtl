"use client";
import { DataTable } from "@/app/components/DataTable";
import DateSelect, { DateOption } from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";

import { IoExitOutline } from "react-icons/io5";
import ButtonWithIcon from "@/app/components/buttons/ButtonWithIcon";
import { title } from "process";
import GenderDropdown, {
  GENDER_OPTION_ENUM,
  GenderOption,
} from "@/app/components/GenderDropdown";
import NameSortDropdown, {
  NameSortOption,
} from "@/app/components/NameSortDropdown";
import PointssortPointsDropdown, {
  SortPointsOption,
} from "@/app/components/PointsSortDropdown";
import PointsSortPointsDropdown from "@/app/components/PointsSortDropdown";
import { exportDataToPDF } from "@/app/utils/exportDataToPDF";

import { User, userData } from "@/app/apiMock/apiMock";
import {
  applyDateFilter,
  applyGenderFilter,
  applyNameSort,
  applyPointsSort,
} from "@/app/utils/filterUtils";
import { useIntl } from "react-intl";

const CustomersClient = () => {
  const [sortedData, setSortedData] = useState<User[]>([]);

  useEffect(() => {
    // FETCH DATA FROM API
    setSortedData(userData);
  }, []);

  const handleSortChange = (newSortPoints: SortPointsOption) => {
    const updatedSortedData = applyPointsSort(userData, newSortPoints);
    applyFilters(updatedSortedData);
  };

  const handleNameSortChange = (newSort: NameSortOption) => {
    const updatedSortedData = applyNameSort(userData, newSort);

    applyFilters(updatedSortedData);
  };

  const handleGenderChange = (selectedGender: GenderOption | null) => {
    let updatedSortedData = applyGenderFilter(userData, selectedGender);
    applyFilters(updatedSortedData);
  };

  const applyFilters = (dataToFilter: User[]) => {
    setSortedData(dataToFilter);
  };

  const handleDateChange = (date: DateOption) => {
    console.log(date);

    let updatedSortedData = applyDateFilter(userData, date);
    applyFilters(updatedSortedData);
  };

  const intl = useIntl();
  return (
    <div className="">
      <Navbar title={intl.formatMessage({ id: "customers.navbar.header" })}>
        <ButtonWithIcon
          label="Export"
          Icon={IoExitOutline}
          className="px-4 py-2 w-36 flex justify-center mx-4"
          onClick={() => exportDataToPDF(sortedData)}
        />
        <PointsSortPointsDropdown
          className="w-[80px] xl:w-36 "
          onSortChange={handleSortChange}
        />
        <NameSortDropdown
          className="w-[80px] xl:w-36"
          onSortChange={handleNameSortChange}
        />
        <GenderDropdown
          className="w-[100px] xl:w-36"
          onGenderChange={handleGenderChange}
        />
        {/* <DateSelect className="" onDateChange={handleDateChange} /> */}
      </Navbar>
      <div className="w-full flex flex-col">
        <div className="px-10 mt-4">
          <DataTable data={sortedData} />
        </div>
      </div>
    </div>
  );
};

export default CustomersClient;
