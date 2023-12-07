import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";

type GenderOption = {
  gender: string;
};

const genderOptions: GenderOption[] = [
  { gender: "Male" },
  { gender: "Female" },
  { gender: "Other" },
];

interface GenderDropdownProps {
  className?: string;
}

const GenderDropdown: React.FC<GenderDropdownProps> = ({ className }) => {
  const [gender, setgender] = useState<GenderOption>({ gender: "Male" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: GenderOption) => {
    setgender(option);
    setIsOpen(false);
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
          <span>{gender.gender}</span>
          <ArrowDown />
        </div>
        {/* <Image src={arrowDown} alt="arrowDown" className=""></Image> */}
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {genderOptions.map((option) => {
            if (option.gender !== gender.gender)
              return (
                <div
                  key={option.gender}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.gender}</span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default GenderDropdown;
