import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";
import { useIntl } from "react-intl";

export type DateOption = {
  date: DATE_OPTION_ENUM;
  value: string;
};

export enum DATE_OPTION_ENUM {
  TODAY = "Today",
  YESTERDAY = "Yesterday",
  LAST_7_DAYS = "Last 7 days",
  LAST_MONTH = "Last month",
  ALL = "All",
}

const dateOptions: DateOption[] = [
  { date: DATE_OPTION_ENUM.TODAY, value: "date.dropdown.today" },
  { date: DATE_OPTION_ENUM.YESTERDAY, value: "date.dropdown.yesterday" },
  { date: DATE_OPTION_ENUM.LAST_7_DAYS, value: "date.dropdown.last7days" },
  { date: DATE_OPTION_ENUM.LAST_MONTH, value: "date.dropdown.lastmonth" },
  { date: DATE_OPTION_ENUM.ALL, value: "date.dropdown.all" },
];

type DateSelectProps = {
  className?: string;
  onDateChange: (date: DateOption) => void;
};

const DateSelect: React.FC<DateSelectProps> = ({ className, onDateChange }) => {
  const intl = useIntl();

  const [date, setDate] = useState<DateOption>(dateOptions[4]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DateOption) => {
    setDate(option);
    setIsOpen(false);
    onDateChange(option);
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
      className="z-40 relative text-themeGray font-semibold"
      ref={dropdownRef}
    >
      {/* DROPDOWN BUTTON */}
      <div
        className={`${className} flex relative flex-row w-36 px-2 py-2 border rounded-md cursor-pointer gap-2 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-full">
          <span>{intl.formatMessage({ id: date.value })}</span>
          <ArrowDown />
        </div>
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className="mt-2 absolute w-36">
          {dateOptions.map(
            (option) =>
              option.date !== date.date && (
                <div
                  key={option.date}
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

export default DateSelect;
