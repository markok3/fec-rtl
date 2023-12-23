"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useIntl } from "react-intl";
import { PhoneInput } from "react-international-phone";

const SettingsClient = () => {
  const intl = useIntl();
  const [userName, setUserName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleOnSave = () => {
    // TODO: SAVE TO API
    console.log(userName, businessName);
  };

  const handlePasswordChangeSaveClick = () => {};

  return (
    <div className="w-full">
      <Navbar title={intl.formatMessage({ id: "settings.title" })} />
      <div className="flex flex-wrap gap-4 p-3  ">
        <Input
          label={intl.formatMessage({ id: "settings.userNameLabel" })}
          className="w-80 h-12 text-sm"
          placeholder={intl.formatMessage({
            id: "settings.userNamePlaceholder",
          })}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label={intl.formatMessage({ id: "settings.businessNameLabel" })}
          className="w-80 h-12 text-sm"
          placeholder={intl.formatMessage({
            id: "settings.businessNamePlaceholder",
          })}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-8 md:gap-4 p-3 ">
        <div className="flex flex-row flex-wrap  w-full items-center gap-4 md:gap-8 ">
          <span className="text-blue font-semibold w-32">
            {intl.formatMessage({ id: "settings.changePassword" })}
          </span>
          <Input
            label={intl.formatMessage({ id: "settings.newPasswordLabel" })}
            type="password"
            placeholder={intl.formatMessage({
              id: "settings.newPasswordPlaceholder",
            })}
            className="h-12 w-80"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.changeButton" })}
            className="ml-2 bg-themeGrayLight py-2 px-4 "
            onClick={handlePasswordChangeSaveClick}
          />
        </div>
        <div className="flex flex-row flex-wrap w-full items-center gap-4 md:gap-8">
          <span className="text-blue font-semibold w-32">
            {intl.formatMessage({ id: "settings.changeEmail" })}
          </span>
          <Input
            label={intl.formatMessage({ id: "settings.newEmailLabel" })}
            type="email"
            placeholder={intl.formatMessage({
              id: "settings.newEmailPlaceholder",
            })}
            className="h-12 w-80 "
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.changeButton" })}
            className="ml-2 bg-themeGrayLight py-2 px-4 "
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row flex-wrap  w-full items-center gap-4 md:gap-8">
          <span className="text-blue font-semibold w-32">
            {intl.formatMessage({ id: "settings.changeMobileNumber" })}
          </span>
          <div className="relative">
            <p className="absolute -top-[11px] left-10  bg-[white] rounded-sm px-1 text-center text-[#401BFF] text-sm font-medium z-40">
              {intl.formatMessage({ id: "createAccount.mobileNumber" })}
            </p>
            <PhoneInput
              className="border-2 border-[#401BFF] rounded-[8px] w-80 h-12"
              defaultCountry="ua"
              // value={phone}
              placeholder={intl.formatMessage({
                id: "createAccount.phonePlaceholder",
              })}
              onChange={(phone) => {}}
            />
          </div>
          <PrimaryButton
            label={intl.formatMessage({ id: "settings.changeButton" })}
            className="ml-2 bg-themeGrayLight py-2 px-4"
            onClick={() => {}}
          />
        </div>
        <PrimaryButton
          label={intl.formatMessage({ id: "settings.saveButton" })}
          className="bg-blue text-white px-4 py-2 mt-3 w-32 "
          onClick={handleOnSave}
        />
      </div>
    </div>
  );
};

export default SettingsClient;
