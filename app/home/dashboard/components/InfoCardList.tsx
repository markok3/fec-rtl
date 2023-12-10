import React from "react";
import InfoCard from "./InfoCard";

interface InfoCardListProps {
  cardData: any[];
}

const InfoCardList: React.FC<InfoCardListProps> = ({ cardData }) => {
  return (
    <div className="flex flex-row flex-wrap w-full p-5 justify-evenly gap-2 ">
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          value={card.value}
          change={card.change}
        />
      ))}
    </div>
  );
};

export default InfoCardList;
