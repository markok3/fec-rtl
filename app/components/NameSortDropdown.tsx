import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";

type NameSort = {
  sort: string;
};

const nameSortOptions: NameSort[] = [
  { sort: "A-Z" },
  { sort: "Z-A" },
  { sort: "none" },
];

interface NameSortDropdownProps {
  className?: string;
  onSortChange: (sortPoints: string) => void;
}

const NameSortDropdown: React.FC<NameSortDropdownProps> = ({
  className,
  onSortChange,
}) => {
  const [sort, setsort] = useState<NameSort>({ sort: "A-Z" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: NameSort) => {
    setsort(option);
    setIsOpen(false);
    onSortChange(option.sort);
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
          <span>{sort.sort}</span>
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
                  <span>{option.sort}</span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default NameSortDropdown;
