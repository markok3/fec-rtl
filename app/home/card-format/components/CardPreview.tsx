import React from "react";
import Image from "next/image";

import Background from "@/public/images/background.jpg";
import Qr from "@/public/images/qr.png";
import Logo from "@/app/components/Logo";
import { CardFormatType } from "../CardFormatClient";

interface CardPreviewProps {
  SelectedLogo?: string;
  cardHolder?: string;
  SelectedBackgroundImage?: string;
  backgroundColor?: string;
  cardFormat?: CardFormatType;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  SelectedLogo,
  cardHolder,
  SelectedBackgroundImage,
  backgroundColor,
  cardFormat,
}) => {
  console.log(cardFormat);
  const imgString: string =
    "data:image/png;base64,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";
  return (
    <div
      className={`max-w-[400px] text-white rounded-xl bg-blue`}
      style={{
        backgroundColor: cardFormat?.selectedColor || "blue",
        borderRadius: "1rem",
      }}
    >
      <div className="flex flex-col w-full  ">
        <div className="flex flex-row w-full p-4 justify-between items-center">
          {cardFormat && cardFormat.logo ? (
            <img src={cardFormat.logo} alt="Card" className="h-12" />
          ) : (
            <Logo className="h-8" />
          )}

          <span>Points: 0</span>
        </div>

        {cardFormat && cardFormat.image ? (
          <img
            src={cardFormat.image}
            alt="Card"
            className="min-w-[400px] h-[200px]"
          />
        ) : (
          <Image src={Background} alt="background" className="h-auto w-full" />
        )}

        <div className="p-4">
          <h2 className="text-xl font-semibold">Card Holder</h2>
          <span>{cardHolder ? cardHolder : "Ibrahim"}</span>
        </div>

        <div className="flex items-center w-full justify-center p-4">
          <Image src={Qr} alt="qr" className="h-auto w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
