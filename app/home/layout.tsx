"use client";
import { Inter } from "next/font/google";
import SideBar from "./components/sidebar/SideBar";
import ClientOnly from "../components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import CreateCustomerModal from "../components/modals/CreateCustomerModal";
import "../components/AuthorizationContainer/authComponents/phoneNumber.css";
const inter = Inter({ subsets: ["latin"] });

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientOnly>
      <div className="w-full">
        <body className=" relative sm:flex sm:flex-row w-full md:static ">
          <div className=" absolute bg-white z-50 md:flex md:static min-h-screen">
            <SideBar />
          </div>
          <div className="w-full overflow-auto max-h-screen">
            <div>{children}</div>
          </div>
        </body>
      </div>
    </ClientOnly>
  );
}
