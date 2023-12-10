import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";

type SortPoints = {
  sortPoints: string;
};

const sortPointsOptions: SortPoints[] = [
  { sortPoints: "asc" },
  { sortPoints: "desc" },
  { sortPoints: "none" },
];

interface PointsSortPointsDropdownProps {
  className?: string;
  onSortChange: (sortPoints: string) => void;
}
const PointsSortPointsDropdown: React.FC<PointsSortPointsDropdownProps> = ({
  className,
  onSortChange,
}) => {
  const [sortPoints, setsortPoints] = useState<SortPoints>({
    sortPoints: "asc",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: SortPoints) => {
    setsortPoints(option);
    setIsOpen(false);
    onSortChange(option.sortPoints);
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
          <span>{sortPoints.sortPoints}</span>
          <ArrowDown />
        </div>
        {/* <Image src={arrowDown} alt="arrowDown" className=""></Image> */}
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {sortPointsOptions.map((option) => {
            if (option.sortPoints !== sortPoints.sortPoints)
              return (
                <div
                  key={option.sortPoints}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.sortPoints}</span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default PointsSortPointsDropdown;
