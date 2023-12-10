"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomeClient = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home/dashboard");
  }, [router]);

  return <div></div>;
};

export default HomeClient;
