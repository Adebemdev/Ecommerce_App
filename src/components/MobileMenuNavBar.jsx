import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../assets/icons/icon-close.svg";
import { navLinks } from "../constants";

const MobileMenuNavBar = () => {
  const [isClose, setIsClose] = useState(true);

  const handleClose = () => {
    setIsClose((isClose) => !isClose);
  };

  return (
    <section>
      (
      {isClose && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-[99] bg-opacity-70">
          <div
            className={`p-8 bg-white sm:w-1/2  sm:h-full md:w-[50%] md:h-full
          ${
            isClose ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[.3s]`}
          >
            <CloseIcon
              fill="#adb5bd"
              onClick={handleClose}
              className="mb-10 cursor-pointer"
            />
            <ul className="flex flex-col gap-4 items-start font-kumbh text-[16px] font-bold text-Very-dark-blue mt-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      )
    </section>
  );
};

export default MobileMenuNavBar;
