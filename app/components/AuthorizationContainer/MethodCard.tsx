import React from "react";

interface MethodCardProps {
  label: string;
  text: string;
  background: React.ReactNode;
  value?: string;
  selectedCard?: string;
  onClick?: () => void;
}

const MethodCard: React.FC<MethodCardProps> = ({
  label,
  text,
  background,
  onClick,
  value,
  selectedCard,
}) => {
  console.log(value === selectedCard);
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`${
        selectedCard === value
          ? " bg-blue text-white b-1 border-blue"
          : "text-[#CCCCCC] border-gray-500"
      } 
        border-[2px] rounded-xl  hover:cursor-pointer pr-4 md:pr-8`}
    >
      <div className="flex flex-row space-x-2 p-1 md:p-3">
        <span
          className={`${
            selectedCard === value
              ? "border-white bg-white relative"
              : "border-gray-500"
          } h-4 w-4 rounded-full border-[2px] p-2.5 flex items-center justify-center`}
        >
          {selectedCard === value && (
            <span className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex p-1.5 items-center justify-center h-3 w-3 rounded-full bg-white border-blue border-4"></span>
          )}
        </span>
        <span>{label}</span>
      </div>
      <p className="p-3">{text}</p>
      <div className="">{background}</div>
    </div>
  );
};

export default MethodCard;
