import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {label}
    </button>
  );
};

export default Button;
