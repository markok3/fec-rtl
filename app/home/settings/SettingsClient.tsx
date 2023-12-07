"use client";
import React from "react";
import HomePageLayout from "../layout";
import ClientOnly from "@/app/components/ClientOnly";
import Navbar from "../components/navbar/Navbar";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";

const SettingsClient = () => {
  return (
    <div>
      <Navbar title="Settings" />

      <div className="flex gap-4 p-3">
        <Input
          label="User Name"
          className="w-72"
          placeholder="Write Your User Name Here..."
        />
        <Input
          label="Email"
          className="w-72"
          placeholder="Write Your Business Name Here..."
        />
      </div>

      <div className="flex flex-col gap-2 p-3 w-80">
        <div className="flex flex-row items-center w-full justify-between ">
          <span className="text-blue font-semibold">Change Password</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">Change E-mail</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">Change Mobile Number</span>
          <PrimaryButton
            label="Save"
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
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
