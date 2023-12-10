import React from "react";

interface ButtonProps {
  className?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  Icon: React.ElementType;
  onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonProps> = ({
  className,
  label,
  type,
  Icon,
  onClick,
}) => {
  return (
    <div>
      <button
        type={type}
        className={`${className} bg-blue text-white rounded-md flex items-center gap-2`}
        onClick={onClick}
      >
        <div className="hidden md:block">{label}</div>
        <Icon />
      </button>
    </div>
  );
};

export default ButtonWithIcon;
