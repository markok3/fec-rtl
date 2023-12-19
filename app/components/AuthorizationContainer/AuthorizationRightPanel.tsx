import Image from "next/image";
import React, { useState } from "react";

import englishFlag from "@/public/images/svgs/englishFlag.svg";
import CountrySelect from "../LanguageSelect";
import LanguageSelect from "../LanguageSelect";
import CreateAccountForm from "./authComponents/CreateAccountForm";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface AuthorizationRightPanelProps {
  bodyComponent: React.ReactNode;
  onNext?: () => void;
}

const AuthorizationRightPanel: React.FC<AuthorizationRightPanelProps> = ({
  bodyComponent,
}) => {
  const [location, setLocation] = useState<CountrySelectValue>();
  return (
    <div className="min-h-screen ">
      <div>
        <div className="min-h-screen  ">
          <div className="flex flex-col gap-[110px] p-4">
            <div className="flex justify-end">
              <LanguageSelect />
            </div>
            {/* This should be body */}
            <div className="">{bodyComponent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationRightPanel;
