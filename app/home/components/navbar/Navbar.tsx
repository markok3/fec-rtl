import DateSelect from "@/app/components/DateSelect";
import LanguageSelect from "@/app/components/LanguageSelect";
import Logo from "@/app/components/Logo";
import DarkModeSwitch from "@/app/components/darkModeSwitch/DarkModeSwitch";
import useSideBarMenuModal from "@/app/hooks/useSideBarMenuModal";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

interface NavbarProps {
  title?: string;
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title, children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (windowWidth <= 768) {
      sideBarMenuModal.onClose();
    } else {
      sideBarMenuModal.onOpen();
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const sideBarMenuModal = useSideBarMenuModal();

  const handleHamburgerMenuClick = () => {
    if (sideBarMenuModal.isOpen) {
      sideBarMenuModal.onClose();
    } else {
      sideBarMenuModal.onOpen();
    }
  };

  if (isMobile)
    return (
      <div className="flex flex-row items-center justify-between p-3 border-b-2 text-blue">
        <div>
          <GiHamburgerMenu size={28} onClick={handleHamburgerMenuClick} />
        </div>

        <div>
          <Logo className="w-8 h-auto" />
        </div>

        <div>
          <IoIosArrowBack size={28} />
        </div>
      </div>
    );

  return (
    <div className="w-full border-themeGrayLight border-[1px] px-4 xl:px-10 py-5 relative ">
      <div className="flex flex-row relative items-center justify-between">
        <h1 className="text-xl xl:text-3xl text-gray-600 font-semibold mr-4">
          {title}
        </h1>
        <div className="flex flex-row gap-x-8  ">
          {children}
          <DarkModeSwitch />
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
