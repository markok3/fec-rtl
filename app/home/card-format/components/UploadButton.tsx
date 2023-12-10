import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

interface UploadButtonProps {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload, id }) => {
  return (
    <div className="flex flex-row w-full h-full text-themeGray items-center justify-end md:justify-center">
      <input
        type="file"
        id={id}
        accept="image/*"
        onChange={onUpload}
        style={{ display: "none" }} // Hide the default file input
      />
      <label
        htmlFor={id}
        className="flex items-center justify-center text-3xl border-[2px] border-dashed border-themeGray rounded-3xl cursor-pointer"
      >
        <MdOutlineFileUpload size={60} className="mx-8 md:mx-16 my-5" />
      </label>
    </div>
  );
};

export default UploadButton;
