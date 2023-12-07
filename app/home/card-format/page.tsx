import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import DashboardClient from "../dashboard/DashboardClient";
import HomePageLayout from "../layout";
import CardFormatClient from "./CardFormatClient";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <CardFormatClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
