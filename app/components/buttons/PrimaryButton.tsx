import React from "react";

interface ButtonProps {
  className?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  label,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${className} bg-blue text-white rounded-md `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
