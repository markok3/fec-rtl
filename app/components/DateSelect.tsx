import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";

type DateOption = {
  date: string;
};

const dateOptions: DateOption[] = [
  { date: "Today" },
  { date: "Yesterday" },
  { date: "Last 7 days" },
  { date: "Last month" },
  { date: "All" },
];

type DateSelectProps = {
  className?: string;
  onDateChange: (date: string) => void;
};

const DateSelect: React.FC<DateSelectProps> = ({ className, onDateChange }) => {
  const [date, setDate] = useState<DateOption>({ date: "All" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DateOption) => {
    setDate(option);
    setIsOpen(false);
    onDateChange(option.date);
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
          <span>{date.date}</span>
          <ArrowDown />
        </div>
        {/* <Image src={arrowDown} alt="arrowDown" className=""></Image> */}
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className="mt-2 absolute w-36">
          {dateOptions.map((option) => {
            if (option.date !== date.date)
              return (
                <div
                  key={option.date}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.date}</span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default DateSelect;
