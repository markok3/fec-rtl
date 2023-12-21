import React, { useState } from "react";
import ArrowDown from "@/public/images/svgs/arrowDown.svg";
import { IoIosArrowUp } from "react-icons/io";

interface PointsCalculatorButtonProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

const PointsCalculatorButton: React.FC<PointsCalculatorButtonProps> = ({
  points,
  setPoints,
}) => {
  const increment = () => {
    if (points < 12) {
      setPoints(points + 1);
    }
  };
  const decrement = () => {
    if (points > 0) {
      setPoints(points - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center border-themeGrayLight border-[1px] justify-center mt-4  space-x-3 p-1 px-3 rounded-xl">
        <IoIosArrowUp
          onClick={increment}
          size={30}
          className="text-themeGrayLight cursor-pointer hover:bg-gray-100 rounded-full"
        />
        <span className="text-blue text-3xl font-bold">{points}</span>
        <IoIosArrowUp
          onClick={decrement}
          size={30}
          className="transform rotate-180 text-themeGrayLight cursor-pointer hover:bg-gray-100 rounded-full"
        />
      </div>
    </div>
  );
};

export default PointsCalculatorButton;
