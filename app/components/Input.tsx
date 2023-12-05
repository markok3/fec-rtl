import React, { ChangeEvent } from "react";
import Image, { StaticImageData } from "next/image";
import emailSVG from "@/public/images/svgs/inputSVGs/emailSVG.svg";

type InputProps = {
  value: string;
  placeholder?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  svgIcon?: StaticImageData;
  type?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  svgIcon,
  type,
}) => {
  return (
    <div>
      {/* <input value={value} onChange={onChange} />
       */}
      <div className="relative  rounded-sm sm:col-span-7 ">
        <p className="absolute -top-[11px] left-10  bg-[white] rounded-sm px-1 text-center text-[#401BFF] text-sm font-medium">
          {label}
        </p>
        {svgIcon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image src={svgIcon} alt="email" className="h-4 w-4 text-white" />
          </div>
        )}
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={`${svgIcon ? "ps-10" : "ps-4 "} 
          w-full h-14  border-[#401BFF] border-2 focus:border-[#401BFF] focus:outline-[#401BFF] focus:border-0 rounded-[8px]  text-gray-600`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
