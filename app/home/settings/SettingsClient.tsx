"use client";
import React, { useState } from "react";
import HomePageLayout from "../layout";
import ClientOnly from "@/app/components/ClientOnly";
import Navbar from "../components/navbar/Navbar";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";

const SettingsClient = () => {
  const [userName, setUserName] = useState("");
  const [businessName, setBusinessName] = useState("");

  const handleOnSave = () => {
    // TODO: SAVE TO API
    console.log(userName, businessName);
  };

  return (
    <div className="w-full">
      {/* @ts-ignore */}
      <Navbar title="Settings" />

      <div className="flex gap-4 p-3 justify-evenly md:justify-start min-w-full">
        <Input
          label="User Name"
          className="w-full md:w-[20rem] text-sm"
          placeholder="Write Your User Name Here..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label="Business Name"
          className="w-full md:w-[20rem] text-sm"
          placeholder="Write Your Business Name Here..."
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 p-3 w-full md:w-[400px]">
        <div className="flex flex-row items-center w-full justify-between ">
          <span className="text-blue font-semibold">Change Password</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">Change E-mail</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">Change Mobile Number</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>

        <PrimaryButton
          label="Save"
          className="bg-blue text-white px-4 py-2 mt-3"
        />
      </div>
    </div>
  );
};

export default SettingsClient;
