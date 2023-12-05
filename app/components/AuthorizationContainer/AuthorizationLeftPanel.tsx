import React from "react";
import Logo from "../Logo";
import EclipseSVG from "./EclipseSVG";
import EclipseTopSVG from "./EclipseTopSVG";

interface AuthorizationLeftPanelProps {
  headerText: string;
  paragraphText: string;
  className?: string;
}

const AuthorizationLeftPanel: React.FC<AuthorizationLeftPanelProps> = ({
  headerText,
  paragraphText,
  className,
}) => {
  return (
    <div>
      <div className="min-h-screen hidden md:block bg-[#401BFF] relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-10px] overflow-hidden h-2/4">
          <EclipseTopSVG />
        </div>

        <div className="absolute bottom-[-100px] left-[-10px] h-2/3">
          <EclipseSVG />
        </div>

        <div className="flex flex-col gap-[100px] p-6">
          <div>
            <Logo className="text-white w-14 h-auto" />
          </div>
          <div>
            {/* add the divs  */}
            <div className="text-white text-4xl font-bold mt-24">
              Join Today!
            </div>
            <div className="text-white">Create Your Account And Get Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationLeftPanel;
