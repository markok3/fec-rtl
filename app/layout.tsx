"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CreateCustomerModal from "./components/modals/CreateCustomerModal";
import ClientOnly from "./components/ClientOnly";
import RecordPointsModal from "./components/modals/RecordCustomerPointsAndRewardsModal";
import RedeemCustomerRewardsModal from "./components/modals/RedeemCustomerRewardsModal";
import ShareYourPageModal from "./components/modals/ShareYourPageModal";
import RecordCustomerPointsAndRewardsModal from "./components/modals/RecordCustomerPointsAndRewardsModal";
import useSelectedLanguage from "./hooks/useSelectedLanguage";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const selectedLanguage = useSelectedLanguage();
  useEffect(() => {
    document.documentElement.lang = selectedLanguage.selectedLanguage;
    document.documentElement.dir =
      selectedLanguage.selectedLanguage === "ar" ? "rtl" : "ltr";
  }, [selectedLanguage.selectedLanguage]);
  return (
    <html
      lang={selectedLanguage.selectedLanguage}
      dir={selectedLanguage.selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      <ClientOnly>
        <CreateCustomerModal />
        <RecordCustomerPointsAndRewardsModal />
        <RedeemCustomerRewardsModal />
        <ShareYourPageModal />
      </ClientOnly>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
