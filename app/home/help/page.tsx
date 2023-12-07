import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import HomePageLayout from "../layout";
import HelpPageClient from "./HelpPageClient";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <HelpPageClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
