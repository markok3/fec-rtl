import React from "react";
import { PageFormatType } from "../PageFormatClient";
import Logo from "@/app/components/Logo";
import Background from "@/public/images/background.jpg";
import Image from "next/image";
import AppleWalletSVG from "@/public/images/svgs/pageFormatSVGs/appleWallet.svg";
import { useIntl } from "react-intl";

interface PagePreviewProps {
  pageFormat?: PageFormatType;
}

const PagePreview: React.FC<PagePreviewProps> = ({ pageFormat }) => {
  const intl = useIntl();
  return (
    <div
      className={`max-w-[380px] text-white rounded-xl bg-blue`}
      style={{
        backgroundColor: pageFormat?.selectedColor || "blue",
        borderRadius: "1rem",
      }}
    >
      <div className="flex flex-col w-full  ">
        <div className="flex flex-row w-full p-4 justify-center items-center">
          {pageFormat && pageFormat.logo ? (
            <img src={pageFormat.logo} alt="Card" className="h-12" />
          ) : (
            <Logo className="h-8" />
          )}
        </div>
        {pageFormat && pageFormat.image ? (
          <img src={pageFormat.image} alt="Card" className="w-auto h-[180px]" />
        ) : (
          <Image
            src={Background}
            alt="background"
            className="h-[180px] w-auto"
          />
        )}
        <div className="flex flex-col items-center w-full justify-center p-4 text-center">
          <p className="py-5">
            {pageFormat?.message
              ? pageFormat.message
              : intl.formatMessage({ id: "pagepreview.message.default" })}
          </p>

          <AppleWalletSVG className="my-8" />
        </div>
      </div>
    </div>
  );
};

export default PagePreview;
