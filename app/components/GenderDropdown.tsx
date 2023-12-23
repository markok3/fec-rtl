import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";
import { useIntl } from "react-intl";

export type GenderOption = {
  option: GENDER_OPTION_ENUM;
  value: string;
};

export enum GENDER_OPTION_ENUM {
  MALE,
  FEMALE,
  ALL,
}

const genderOptions: GenderOption[] = [
  { option: GENDER_OPTION_ENUM.MALE, value: "gender.dropdown.male" },
  { option: GENDER_OPTION_ENUM.FEMALE, value: "gender.dropdown.female" },
  { option: GENDER_OPTION_ENUM.ALL, value: "gender.dropdown.all" },
];

interface GenderDropdownProps {
  className?: string;
  onGenderChange: (gender: GenderOption) => void;
}

const GenderDropdown: React.FC<GenderDropdownProps> = ({
  className,
  onGenderChange,
}) => {
  const intl = useIntl();

  const [gender, setgender] = useState<GenderOption>(genderOptions[2]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: GenderOption) => {
    console.log(option);
    setgender(option);
    setIsOpen(false);
    onGenderChange(option);
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
          <span>{intl.formatMessage({ id: gender.value })}</span>
          <ArrowDown />
        </div>
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {genderOptions.map(
            (option) =>
              option.option !== gender.option && (
                <div
                  key={option.option}
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

export default GenderDropdown;
