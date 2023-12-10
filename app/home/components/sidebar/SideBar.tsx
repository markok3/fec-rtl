import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import HomeSVG from "@/public/images/svgs/sidebar/home.svg";
import { GoHomeFill } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoEnterSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import useSideBarMenuModal from "@/app/hooks/useSideBarMenuModal";

import { RxCross2 } from "react-icons/rx";

const linksTopPart = [
  { href: "/home/dashboard", label: "Home", Icon: GoHomeFill },
  { href: "/home/customers", label: "Customers", Icon: IoMdContact },
  { href: "/home/card-format", label: "Card Format", Icon: FaCreditCard },
  { href: "/home/page-format", label: "Page Format", Icon: FaMapLocationDot },
  { href: "/home/geographic", label: "Geographic", Icon: IoEnterSharp },
];

const linksBottomPart = [
  { href: "/home/settings", label: "Settings", Icon: IoMdSettings },
  { href: "/home/help", label: "Help", Icon: IoMdHelpCircle },
  { href: "/home/sign-out", label: "Sign out", Icon: BiLogIn },
];

const SideBar = () => {
  const pathname = usePathname();
  const sideBarMenuModal = useSideBarMenuModal();
  console.log(sideBarMenuModal.isOpen);
  console.log(pathname);
  return (
    <div
      className={`min-h-screen max-h-screen translate duration-300 z-50 ${
        sideBarMenuModal.isOpen ? "-translate-x-0 " : "-translate-x-full"
      } 
    ${sideBarMenuModal.isOpen ? "opacity-100" : "opacity-0 hidden  md:flex"}  `}
    >
      <div className="p-4 text-blue md:hidden">
        <RxCross2 size={26} onClick={sideBarMenuModal.onClose} />
      </div>
      <div className="flex flex-col justify-between h-full py-4 px-2 border-r-themeGrayLight border-[1px]">
        <div className="flex flex-col space-y-2">
          {linksTopPart.map((link) => (
            <Link
              key={link.href}
              className={`${
                pathname === link.href
                  ? "flex gap-2 bg-blue text-white px-4 py-4 rounded-md "
                  : "flex gap-2 bg-white text-themeGray px-4 py-4 rounded-md"
              }
              items-center gap-3
              `}
              href={link.href}
            >
              <link.Icon size={28} />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          {linksBottomPart.map((link) => (
            <Link
              key={link.href}
              className={`${
                pathname === link.href
                  ? "flex gap-2 bg-blue text-white px-4 py-4 rounded-md"
                  : "flex gap-2 bg-white text-themeGray px-4 py-4 rounded-md"
              }`}
              href={link.href}
            >
              <link.Icon size={28} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
