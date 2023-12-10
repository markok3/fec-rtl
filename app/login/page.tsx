import React from "react";
import ClientOnly from "../components/ClientOnly";
import LoginClient from "./LoginClient";
const Home = () => {
  return (
    <ClientOnly>
      <LoginClient />
    </ClientOnly>
  );
};

export default Home;
