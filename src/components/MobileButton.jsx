import React from "react";
import { Button } from "./Button";

const MobileButton = ({ children, className, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      className={`button ${className} h-10 w-10 bg-white rounded-full transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center`}
    >
      <spn>{children}</spn>
    </Button>
  );
};

export default MobileButton;
