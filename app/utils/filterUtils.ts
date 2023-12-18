// FilterUtils.ts

import { User } from "../apiMock/apiMock";

export const applyPointsSort = (userData: User[], newSortPoints: string) => {
  const updatedSortedData = [...userData];
  if (newSortPoints === "asc") {
    updatedSortedData.sort((a, b) => a.points - b.points);
  } else if (newSortPoints === "desc") {
    updatedSortedData.sort((a, b) => b.points - a.points);
  }

  return updatedSortedData;
};

export const applyNameSort = (userData: User[], newSort: string) => {
  const updatedSortedData = [...userData];
  if (newSort === "A-Z") {
    updatedSortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (newSort === "Z-A") {
    updatedSortedData.sort((a, b) => b.name.localeCompare(a.name));
  }

  return updatedSortedData;
};

export const applyGenderFilter = (
  userData: User[],
  selectedGender: string | null
) => {
  let updatedSortedData = [...userData];

  if (selectedGender !== null && selectedGender !== "none") {
    updatedSortedData = updatedSortedData.filter(
      (user) => user.gender?.toLowerCase() === selectedGender.toLowerCase()
    );
  }

  return updatedSortedData;
};

export const applyDateFilter = (userData: User[], date: string) => {
  let updatedSortedData = [...userData];

  const currentDate = new Date();

  if (date === "Last month") {
    // Calculate the start date of the last month
    const lastMonthStartDate = new Date(currentDate);
    lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);

    // Calculate the end date of the last month
    const lastMonthEndDate = new Date(currentDate);

    console.log(lastMonthStartDate);
    console.log(lastMonthEndDate);

    // Filter data for users created in the last month
    updatedSortedData = updatedSortedData.filter((user) => {
      if (user.creationDate) {
        const userDate = new Date(user.creationDate);
        return userDate >= lastMonthStartDate && userDate <= lastMonthEndDate;
      }
      return false;
    });

    return updatedSortedData;
  }

  if (date === "Yesterday") {
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

    return updatedSortedData;
  }

  if (date === "Last 7 days") {
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

    return updatedSortedData;
  }

  if (date === "Today") {
    updatedSortedData = updatedSortedData.filter((user) => {
      if (user.creationDate) {
        const userDate = new Date(user.creationDate);
        return (
          userDate.getDate() === currentDate.getDate() &&
          userDate.getMonth() === currentDate.getMonth() &&
          userDate.getFullYear() === currentDate.getFullYear()
        );
      }
      return updatedSortedData;
    });
  }

  return updatedSortedData;
};
