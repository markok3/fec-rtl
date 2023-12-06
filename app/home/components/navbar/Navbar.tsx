import DateSelect from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full border-themeGrayLight border-[1px] px-4 xl:px-10">
      <div className="flex flex-row relative items-center justify-between  py-5">
        <h1 className="text-xl xl:text-3xl text-gray-600 font-semibold">
          Hi Meshari, I hope you have a nice day
        </h1>
        <div className="flex flex-row space-x-8">
          <DateSelect />
          <DarkModeSwitch />
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
