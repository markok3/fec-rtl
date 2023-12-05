import React from "react";
import ClientOnly from "../components/ClientOnly";
import SignUpClient from "./SignUpClient";

const Home = () => {
  return (
    <div>
      <ClientOnly>
        <SignUpClient />
      </ClientOnly>
    </div>
  );
};

export default Home;
