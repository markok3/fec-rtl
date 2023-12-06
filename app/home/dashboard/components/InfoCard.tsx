import React from "react";

import InfoCardBackgroundSVG from "@/public/images/svgs/dashboardSVGs/infoCard.svg";

interface InfoCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  value,
  change,
}) => {
  return (
    <div className="relative w-[300px] h-[190px] bg-blue rounded-xl p-4">
      <div className="h-full flex flex-col justify-between relative z-30">
        <div className="flex flex-row w-full justify-between text-white items-center">
          <div className="font-semibold">{title}</div>
          <div className="text-sm">{subtitle}</div>
        </div>

        <div className="flex flex-row w-full justify-between text-white items-center">
          <div className="font-bold text-2xl">{value}</div>
          <div className="text-sm">{change}</div>
        </div>
      </div>
      <InfoCardBackgroundSVG className="bg-blue text-white absolute right-1 bottom-1 z-10" />
    </div>
  );
};

export default InfoCard;
