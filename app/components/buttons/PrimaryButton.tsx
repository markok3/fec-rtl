import React from "react";

interface ButtonProps {
  className?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<ButtonProps> = ({ className, label, type }) => {
  return (
    <button
      type={type}
      className={`${className} bg-blue text-white rounded-md `}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
