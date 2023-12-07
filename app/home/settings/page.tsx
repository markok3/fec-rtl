import React from "react";
import HomePageLayout from "../layout";
import ClientOnly from "@/app/components/ClientOnly";
import SettingsClient from "./SettingsClient";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <SettingsClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
