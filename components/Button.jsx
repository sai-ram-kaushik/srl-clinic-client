import React from "react";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={`bg-linearGradient w-[208px] ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
