import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";
import { useIntl } from "react-intl";

export type SortPointsOption = {
  sortPoints: SORT_POINTS_ENUM;
  value: string;
};

export enum SORT_POINTS_ENUM {
  ASC,
  DESC,
  NONE,
}

const sortPointsOptions: SortPointsOption[] = [
  { sortPoints: SORT_POINTS_ENUM.ASC, value: "points.dropdown.ascending" },
  {
    sortPoints: SORT_POINTS_ENUM.DESC,
    value: "points.dropdown.descending",
  },
  { sortPoints: SORT_POINTS_ENUM.NONE, value: "points.dropdown.none" },
];

interface PointsSortPointsDropdownProps {
  className?: string;
  onSortChange: (sortPoints: SortPointsOption) => void;
}

const PointsSortPointsDropdown: React.FC<PointsSortPointsDropdownProps> = ({
  className,
  onSortChange,
}) => {
  const intl = useIntl();

  const [sortPoints, setSortPoints] = useState<SortPointsOption>(
    sortPointsOptions[2]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: SortPointsOption) => {
    setSortPoints(option);
    setIsOpen(false);
    onSortChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="z-30 relative text-themeGray font-semibold"
      ref={dropdownRef}
    >
      {/* DROPDOWN BUTTON */}
      <div
        className={`flex relative flex-row w-36 px-2 py-2 border rounded-md cursor-pointer gap-2  ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-full">
          <span>{intl.formatMessage({ id: sortPoints.value })}</span>
          <ArrowDown />
        </div>
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {sortPointsOptions.map(
            (option) =>
              option.sortPoints !== sortPoints.sortPoints && (
                <div
                  key={option.sortPoints}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{intl.formatMessage({ id: option.value })}</span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default PointsSortPointsDropdown;
