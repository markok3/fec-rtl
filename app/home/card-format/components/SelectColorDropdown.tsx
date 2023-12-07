import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";

type ColorOption = {
  color: string;
};

const colorOptions: ColorOption[] = [
  { color: "#1D2D50" },
  { color: "#7F8C8D" },
  { color: "#16A085" },
];

interface SelectColorDropdownProps {
  className?: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const SelectColorDropdown: React.FC<SelectColorDropdownProps> = ({
  className,
  setSelectedColor,
}) => {
  const [color, setcolor] = useState<ColorOption>({ color: "#1D2D50" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: ColorOption) => {
    setcolor(option);
    setSelectedColor(option.color);
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
          <div
            style={{
              width: "3rem",
              height: "2rem",
              backgroundColor: color.color,
            }}
            className="rounded-md"
          ></div>
          <ArrowDown />
        </div>
        {/* <Image src={arrowDown} alt="arrowDown" className=""></Image> */}
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className={`mt-2 absolute w-36 ${className}`}>
          {colorOptions.map((option) => {
            if (option.color !== color.color)
              return (
                <div
                  key={option.color}
                  className="w-full flex items-center justify-center mt-1  py-2 border rounded-md cursor-pointer bg-white hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "2rem",
                      backgroundColor: option.color,
                    }}
                    className="rounded-md"
                  ></div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectColorDropdown;
