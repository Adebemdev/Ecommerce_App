import React from "react";
import { Button } from "./Button";

const AnotherIconButton = ({ icons, children, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      className="flex items-center bg-Light-grayish-blue gap-4 justify-between px-10 py-4 sm:w-full lg:w-[150px] rounded-md"
    >
      <span className="icon">{icons[0]}</span>
      <span className="text">{children}</span>
      <span className="icon">{icons[1]}</span>
    </Button>
  );
};

export default AnotherIconButton;
