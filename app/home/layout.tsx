"use client";
import { Inter } from "next/font/google";
import SideBar from "./components/sidebar/SideBar";
import ClientOnly from "../components/ClientOnly";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientOnly>
      <div className="w-full">
        <body className=" flex flex-row w-full ">
          <SideBar />
          <div className="w-full overflow-auto max-h-screen">
            <Navbar />
            <div>{children}</div>
          </div>
        </body>
      </div>
    </ClientOnly>
  );
}
