import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <ClientOnly>
      <HomeClient />
    </ClientOnly>
  );
}
