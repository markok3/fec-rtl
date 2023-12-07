import React from "react";
import HomePageLayout from "../layout";
import ClientOnly from "@/app/components/ClientOnly";
import GeographicClient from "./GeographicClient";

const page = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <GeographicClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default page;
