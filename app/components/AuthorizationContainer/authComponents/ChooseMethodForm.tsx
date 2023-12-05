import React, { useState } from "react";
import MethodCard from "../MethodCard";
import PrimaryButton from "../../buttons/PrimaryButton";
import PointsSVG from "./PointsSVG";
import StampsSVG from "./StampsSVG";

interface ChooseMethodFormProps {
  onNext: () => void;
}

const ChooseMethodForm: React.FC<ChooseMethodFormProps> = ({ onNext }) => {
  const [selectedCard, setSelectedCard] = useState<string>("");

  const onClick = (value: string) => {
    console.log(value);
    if (selectedCard === value) {
      setSelectedCard("");
      return;
    }
    setSelectedCard(value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h2 className="text-blue text-3xl font-bold text-center">
          Loyalty System Setup
        </h2>

        {/* CARDS */}
        <div className="flex flex-row space-x-4 mt-10">
          <MethodCard
            label="Points"
            text="Enter your points"
            background={<PointsSVG />}
            value="points"
            selectedCard={selectedCard}
            onClick={() => onClick("points")}
          />
          <MethodCard
            label="Stamps"
            text="Enter your stamps"
            background={<StampsSVG />}
            value="stamps"
            selectedCard={selectedCard}
            onClick={() => onClick("stamps")}
          />
        </div>
        <PrimaryButton
          type="button"
          label="Next"
          className="mt-10 w-full py-4"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default ChooseMethodForm;
