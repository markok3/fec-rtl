"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useIntl } from "react-intl";

const SettingsClient = () => {
  const intl = useIntl();
  const [userName, setUserName] = useState("");
  const [businessName, setBusinessName] = useState("");

  const handleOnSave = () => {
    // TODO: SAVE TO API
    console.log(userName, businessName);
  };

  return (
    <div className="w-full">
      <Navbar title={intl.formatMessage({ id: "settings.title" })} />
      <div className="flex gap-4 p-3 justify-evenly md:justify-start min-w-full">
        <Input
          label={intl.formatMessage({ id: "settings.userNameLabel" })}
          className="w-full md:w-[20rem] text-sm"
          placeholder={intl.formatMessage({
            id: "settings.userNamePlaceholder",
          })}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label={intl.formatMessage({ id: "settings.businessNameLabel" })}
          className="w-full md:w-[20rem] text-sm"
          placeholder={intl.formatMessage({
            id: "settings.businessNamePlaceholder",
          })}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 p-3 w-full md:w-[400px]">
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">
            {intl.formatMessage({ id: "settings.changePassword" })}
          </span>
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.saveButton" })}
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">
            {intl.formatMessage({ id: "settings.changeEmail" })}
          </span>
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.saveButton" })}
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <span className="text-blue font-semibold">
            {intl.formatMessage({ id: "settings.changeMobileNumber" })}
          </span>
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.saveButton" })}
            className="ml-2 bg-themeGrayLight text-themeGray px-4 py-1"
            onClick={() => {}}
          />
        </div>
        <PrimaryButton
          label={intl.formatMessage({ id: "settings.saveButton" })}
          className="bg-blue text-white px-4 py-2 mt-3"
          onClick={handleOnSave}
        />
      </div>
    </div>
  );
};

export default SettingsClient;
