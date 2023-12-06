import React from "react";
import ClientOnly from "../components/ClientOnly";
import HomeClient from "./HomeClient";

const Home = () => {
  return (
    <ClientOnly>
      <HomeClient />
    </ClientOnly>
  );
};

export default Home;
