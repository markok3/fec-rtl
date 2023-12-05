import React, { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import arrowDown from "@/public/images/svgs/arrowDown.svg";
import britishFlag from "@/public/images/svgs/englishFlag.svg";
import saudiFlag from "@/public/images/svgs/saudiFlag.svg";

type LanguageOption = {
  svgIcon: StaticImageData;
  label: string;
};

const englishOption: LanguageOption = {
  svgIcon: britishFlag,
  label: "EN",
};

const saudiArabiaOption: LanguageOption = {
  svgIcon: saudiFlag,
  label: "AR",
};

const languageOptions: LanguageOption[] = [englishOption, saudiArabiaOption];

const LanguageSelect = () => {
  const [language, setLanguage] = useState<LanguageOption>(englishOption);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: LanguageOption) => {
    setLanguage(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  console.log(language);

  return (
    <div className="absolute " ref={dropdownRef}>
      {/* DROPDOWN BUTTON */}
      <div
        className="flex flex-row px-3 py-2 border rounded-md cursor-pointer gap-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={language.svgIcon}
          alt="countryIcon"
          width={32}
          height={24}
        ></Image>
        <Image src={arrowDown} alt="arrowDown" className=""></Image>
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div className="mt-2 ">
          {languageOptions.map((option) => {
            if (option.label !== language.label)
              return (
                <div
                  key={option.label}
                  className="flex items-center justify-center mt-1px-3 py-2 border rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <Image
                    src={option.svgIcon}
                    alt="countryIcon"
                    width={32}
                    height={24}
                  ></Image>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
