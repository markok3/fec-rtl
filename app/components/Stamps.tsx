interface StampsProps {
  currentStamps: number;
  totalStamps: number;
}

import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Stamps: React.FC<StampsProps> = ({ currentStamps, totalStamps }) => {
  return (
    <div className=" w-full flex items-center justify-center gap-4">
      {Array.from({ length: currentStamps }).map((_, index) => (
        <FaCheckCircle key={index} size={30} className={"text-blue"} />
      ))}
      {Array.from({ length: totalStamps - currentStamps }).map((_, index) => (
        <FaCircle key={index} size={30} className="text-themeGray" />
      ))}
    </div>
  );
};

export default Stamps;
