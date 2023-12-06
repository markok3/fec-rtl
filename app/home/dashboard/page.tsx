"use client";
import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import DashboardClient from "./DashboardClient";
import HomePageLayout from "../layout";
import RootLayout from "@/app/layout";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <DashboardClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
