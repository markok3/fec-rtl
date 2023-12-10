"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import CreatePageFormatForm from "./components/CreatePageFormatForm";
import PagePreview from "./components/PagePreview";

export type PageFormatType = {
  logo: string | null;
  image: string | null;
  selectedColor: string | null;
  message: string | null;
};

const PageFormatClient = () => {
  const [pageFormat, setPageFormat] = useState<any>(null);
  return (
    <div className="">
      {/* @ts-ignore */}
      <Navbar title="Page Format"></Navbar>
      <div className="w-full flex flex-row flex-wrap justify-center md:justify-start">
        <div className="p-5">
          <CreatePageFormatForm setPageFormat={setPageFormat} />
        </div>
        <div className="p-5">
          <PagePreview pageFormat={pageFormat} />
        </div>

        <div className="flex flex-col"></div>

        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default PageFormatClient;
