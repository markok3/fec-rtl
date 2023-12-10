"use client";
import { DataTable } from "@/app/components/DataTable";
import DateSelect from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";

import { IoExitOutline } from "react-icons/io5";
import ButtonWithIcon from "@/app/components/buttons/ButtonWithIcon";
import { title } from "process";
import GenderDropdown from "@/app/components/GenderDropdown";
import NameSortDropdown from "@/app/components/NameSortDropdown";
import PointssortPointsDropdown from "@/app/components/PointsSortDropdown";
import PointsSortPointsDropdown from "@/app/components/PointsSortDropdown";
import { exportDataToPDF } from "@/app/utils/exportDataToPDF";

import { User, userData } from "@/app/apiMock/apiMock";

const CustomersClient = () => {
  const [sortedData, setSortedData] = useState<User[]>([]);

  useEffect(() => {
    // FETCH DATA FROM API
    setSortedData(userData);
  }, []);

  const handleSortChange = (newSortPoints: string) => {
    const updatedSortedData = [...userData];
    if (newSortPoints === "asc") {
      updatedSortedData.sort((a, b) => a.points - b.points);
    } else if (newSortPoints === "desc") {
      updatedSortedData.sort((a, b) => b.points - a.points);
    }

    applyFilters(updatedSortedData);
  };

  const handleNameSortChange = (newSort: string) => {
    const updatedSortedData = [...userData];
    if (newSort === "A-Z") {
      updatedSortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (newSort === "Z-A") {
      updatedSortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    applyFilters(updatedSortedData);
  };

  const handleGenderChange = (selectedGender: string | null) => {
    let updatedSortedData = [...userData];

    if (selectedGender !== null && selectedGender !== "none") {
      updatedSortedData = updatedSortedData.filter(
        (user) => user.gender?.toLowerCase() === selectedGender.toLowerCase()
      );
    }
    applyFilters(updatedSortedData);
  };

  const applyFilters = (dataToFilter: User[]) => {
    setSortedData(dataToFilter);
  };

  const handleDateChange = (date: string) => {
    console.log(date);

    let updatedSortedData = [...userData];

    const currentDate = new Date();

    if (date) {
      if (date === "Last month") {
        // Calculate the start date of the last month
        const lastMonthStartDate = new Date(currentDate);
        lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);
        lastMonthStartDate.setDate(1);

        // Calculate the end date of the last month
        const lastMonthEndDate = new Date(currentDate);
        lastMonthEndDate.setDate(0);

        console.log(lastMonthStartDate);

        // Filter data for users created in the last month
        updatedSortedData = updatedSortedData.filter((user) => {
          if (user.creationDate) {
            const userDate = new Date(user.creationDate);
            return (
              userDate >= lastMonthStartDate && userDate <= lastMonthEndDate
            );
          }
          return false;
        });

        applyFilters(updatedSortedData);
      } else if (date === "Yesterday") {
        const yesterday = new Date(currentDate);
        yesterday.setDate(yesterday.getDate() - 1);
        console.log(yesterday);

        // Filter data for users created in the last month
        updatedSortedData = updatedSortedData.filter((user) => {
          if (user.creationDate) {
            const userDate = new Date(user.creationDate);
            return (
              userDate.getDate() === yesterday.getDate() &&
              userDate.getMonth() === yesterday.getMonth() &&
              userDate.getFullYear() === yesterday.getFullYear()
            );
          }
          return false;
        });

        applyFilters(updatedSortedData);
      } else if (date === "Last 7 days") {
        const lastWeekStartDate = new Date(currentDate);
        lastWeekStartDate.setDate(lastWeekStartDate.getDate() - 7);
        console.log(lastWeekStartDate);

        // Filter data for users created in the last month
        updatedSortedData = updatedSortedData.filter((user) => {
          if (user.creationDate) {
            const userDate = new Date(user.creationDate);
            return userDate >= lastWeekStartDate && userDate <= currentDate;
          }
          return false;
        });

        applyFilters(updatedSortedData);
      } else if (date === "Today") {
        updatedSortedData = updatedSortedData.filter((user) => {
          if (user.creationDate) {
            const userDate = new Date(user.creationDate);
            return (
              userDate.getDate() === currentDate.getDate() &&
              userDate.getMonth() === currentDate.getMonth() &&
              userDate.getFullYear() === currentDate.getFullYear()
            );
          }
          return false;
        });

        applyFilters(updatedSortedData);
      }
    }
  };

  return (
    <div className="">
      <Navbar title="Customers">
        <ButtonWithIcon
          label="Export"
          Icon={IoExitOutline}
          className="px-4 py-2 "
          onClick={() => exportDataToPDF(sortedData)}
        />
        <PointsSortPointsDropdown
          className="w-[80px]"
          onSortChange={handleSortChange}
        />
        <NameSortDropdown
          className="w-[80px]"
          onSortChange={handleNameSortChange}
        />
        <GenderDropdown
          className="w-[100px]"
          onGenderChange={handleGenderChange}
        />
        <DateSelect className="" onDateChange={handleDateChange} />
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
