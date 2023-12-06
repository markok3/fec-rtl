import React from "react";
import InfoCard from "./InfoCard";

const InfoCardList = () => {
  const cardData = [
    {
      title: "Total Points",
      subtitle: "This month",
      value: "1,000",
      change: "+100",
    },
    {
      title: "Total Cards",
      subtitle: "This month",
      value: "500",
      change: "+50",
    },
    {
      title: "Total Visits",
      subtitle: "This month",
      value: "2,000",
      change: "+200",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap w-full p-5 justify-evenly ">
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
