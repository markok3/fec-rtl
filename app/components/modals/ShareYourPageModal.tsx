"use client";
import React from "react";
import useShareYourPageModal from "@/app/hooks/useShareYourPageModal";
import Modal from "./Modal";
import Image from "next/image";

import { FaTriangleExclamation } from "react-icons/fa6";
import Qr from "@/public/images/qr.png";
import PrimaryButton from "../buttons/PrimaryButton";

const ShareYourPageModal = () => {
  const shareYourPageModal = useShareYourPageModal();

  const urlToCopy = "https://example.com";
  //   FETCH QR CODE FROM BACKEND AND PASS IT TO SRC

  let bodyContent = (
    <div className="flex flex-col items-center">
      <div className="flex md:flex-row flex-col items-center">
        <Image src={Qr} alt="qr" className="h-auto md:w-1/3 w-1/2" />
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <FaTriangleExclamation className="text-blue" />
            <p className="text-blue">Scan this QR code to download your card</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaTriangleExclamation className="text-blue" />
            <p className="text-blue">Scan this QR code to download your card</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaTriangleExclamation className="text-blue" />
            <p className="text-blue">Scan this QR code to download your card</p>
          </div>
        </div>
      </div>
      <PrimaryButton
        label="Copy Link"
        className="px-8 py-3 mt-4"
        onClick={() => {}}
      />
    </div>
  );

  return (
    <Modal
      isOpen={shareYourPageModal.isOpen}
      onClose={shareYourPageModal.onClose}
      title="Share Your Page"
      body={bodyContent}
    />
  );
};

export default ShareYourPageModal;
