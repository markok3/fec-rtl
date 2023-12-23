import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";
import { useIntl } from "react-intl";

export type NameSortOption = {
  sort: NAME_SORT_ENUM;
  value: string;
};

export enum NAME_SORT_ENUM {
  A_Z,
  Z_A,
  NONE,
}

const nameSortOptions: NameSortOption[] = [
  { sort: NAME_SORT_ENUM.A_Z, value: "name.dropdown.a-z" },
  { sort: NAME_SORT_ENUM.Z_A, value: "name.dropdown.z-a" },
  { sort: NAME_SORT_ENUM.NONE, value: "name.dropdown.none" },
];

interface NameSortDropdownProps {
  className?: string;
  onSortChange: (sortPoints: NameSortOption) => void;
}

const NameSortDropdown: React.FC<NameSortDropdownProps> = ({
  className,
  onSortChange,
}) => {
  const intl = useIntl();

  const [sort, setsort] = useState<NameSortOption>(nameSortOptions[2]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: NameSortOption) => {
    setsort(option);
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
      className="z-50 relative text-themeGray font-semibold"
      ref={dropdownRef}
    >
      {/* DROPDOWN BUTTON */}
      <div
        className={`flex relative flex-row w-36 px-2 py-2 border rounded-md cursor-pointer gap-2  ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-full">
          <span>{intl.formatMessage({ id: sort.value })}</span>
          <ArrowDown />
        </div>
        {/* <Image src={arrowDown} alt="arrowDown" className=""></Image> */}
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {nameSortOptions.map((option) => {
            if (option.sort !== sort.sort)
              return (
                <div
                  key={option.sort}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{intl.formatMessage({ id: option.value })}</span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default NameSortDropdown;
