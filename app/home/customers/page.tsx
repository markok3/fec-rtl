import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import DashboardClient from "../dashboard/DashboardClient";
import HomePageLayout from "../layout";
import CustomersClient from "./CustomersClient";

const Home = () => {
  return (
    <HomePageLayout>
      <ClientOnly>
        <CustomersClient />
      </ClientOnly>
    </HomePageLayout>
  );
};

export default Home;
