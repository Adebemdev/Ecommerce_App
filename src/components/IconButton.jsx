import React from "react";
import { Button } from "./Button";

const IconButton = ({
  children,
  icon,
  className,
  fullwidth,
  addOnToCart,
  ...buttonProps
}) => {
  return (
    <Button
      {...buttonProps}
      className={`flex items-center gap-2 justify-center bg-primary-orange px-10 py-4 rounded-md ${
        fullwidth ? "w-full" : "lg:w-[250px] sm:w-full"
      }  text-white font-kumbh text-sm`}
    >
      <span className="icon">{icon}</span>
      {children}
    </Button>
  );
};

export default IconButton;
