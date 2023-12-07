import React from "react";
import PageFormatClient from "./PageFormatClient";
import ClientOnly from "@/app/components/ClientOnly";
import HomePageLayout from "../layout";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <PageFormatClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
