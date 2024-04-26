import React from "react";
// Base Button
export const Button = ({ children, className, disabled }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={() => {}}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
