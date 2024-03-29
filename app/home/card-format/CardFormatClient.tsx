"use client";
import ClientOnly from "@/app/components/ClientOnly";
import React, { useState } from "react";
import DashboardClient from "../dashboard/DashboardClient";
import HomePageLayout from "../layout";
import Navbar from "../components/navbar/Navbar";
import CreateCardFormatForm from "./components/CreateCardFormatForm";
import CardPreview from "./components/CardPreview";
import { useIntl } from "react-intl";

export type CardFormatType = {
  logo: string | null;
  image: string | null;
  selectedColor: string | null;
};
const CardFormatClient = () => {
  const intl = useIntl();
  const [cardFormat, setCardFormat] = useState<any>(null);

  // GET USER TYPE FROM API
  const clientType = "points";
  const cardHolderName = "Meshari";

  console.log(cardFormat);

  return (
    <div className="">
      {/* @ts-ignore */}
      <Navbar
        title={intl.formatMessage({ id: "cardformat.navbar.header" })}
      ></Navbar>
      <div className="w-full flex flex-row flex-wrap justify-center md:justify-start">
        <div className="p-5">
          <CreateCardFormatForm
            setCardFormat={setCardFormat}
            clientType={clientType}
          />
        </div>
        <div className="p-5">
          <CardPreview cardFormat={cardFormat} cardHolder={cardHolderName} />
        </div>

        <div className="flex flex-col"></div>

        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default CardFormatClient;
