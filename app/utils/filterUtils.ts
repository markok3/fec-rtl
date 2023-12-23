// FilterUtils.ts

import { User } from "../apiMock/apiMock";
import { DATE_OPTION_ENUM, DateOption } from "../components/DateSelect";
import { GENDER_OPTION_ENUM, GenderOption } from "../components/GenderDropdown";
import { NAME_SORT_ENUM, NameSortOption } from "../components/NameSortDropdown";
import {
  SORT_POINTS_ENUM,
  SortPointsOption,
} from "../components/PointsSortDropdown";

export const applyPointsSort = (
  userData: User[],
  newSortPoints: SortPointsOption
) => {
  const updatedSortedData = [...userData];
  if (newSortPoints.sortPoints === SORT_POINTS_ENUM.ASC) {
    updatedSortedData.sort((a, b) => a.points - b.points);
  } else if (newSortPoints.sortPoints === SORT_POINTS_ENUM.DESC) {
    updatedSortedData.sort((a, b) => b.points - a.points);
  }

  return updatedSortedData;
};

export const applyNameSort = (userData: User[], newSort: NameSortOption) => {
  const updatedSortedData = [...userData];
  if (newSort.sort === NAME_SORT_ENUM.A_Z) {
    updatedSortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (newSort.sort === NAME_SORT_ENUM.Z_A) {
    updatedSortedData.sort((a, b) => b.name.localeCompare(a.name));
  }

  return updatedSortedData;
};

export const applyGenderFilter = (
  userData: User[],
  selectedGender: GenderOption | null
) => {
  let updatedSortedData = [...userData];

  const getGenderType = (gender: string | undefined) => {
    if (gender === undefined) {
      return GENDER_OPTION_ENUM.ALL;
    }

    if (gender.toLocaleLowerCase() === "male") {
      return GENDER_OPTION_ENUM.MALE;
    } else if (gender.toLocaleLowerCase() === "female") {
      return GENDER_OPTION_ENUM.FEMALE;
    }
  };

  if (
    selectedGender !== null &&
    selectedGender.option !== GENDER_OPTION_ENUM.ALL
  ) {
    updatedSortedData = updatedSortedData.filter(
      (user) => getGenderType(user.gender) === selectedGender.option
    );
  }

  return updatedSortedData;
};

export const applyDateFilter = (userData: User[], date: DateOption) => {
  let updatedSortedData = [...userData];

  const currentDate = new Date();

  if (date.date === DATE_OPTION_ENUM.LAST_MONTH) {
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

  if (date.date === DATE_OPTION_ENUM.YESTERDAY) {
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

  if (date.date === DATE_OPTION_ENUM.LAST_7_DAYS) {
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

  if (date.date === DATE_OPTION_ENUM.TODAY) {
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
