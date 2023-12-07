import DateSelect from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import React from "react";

interface NavbarProps {
  title: string;
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title, children }) => {
  return (
    <div className="w-full border-themeGrayLight border-[1px] px-4 xl:px-10 py-5">
      <div className="flex flex-row relative items-center justify-between">
        <h1 className="text-xl xl:text-3xl text-gray-600 font-semibold ">
          {title}
        </h1>
        <div className="flex flex-row space-x-8">
          {children}
          <DarkModeSwitch />
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
