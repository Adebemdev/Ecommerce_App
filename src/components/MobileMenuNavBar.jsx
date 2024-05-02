import React from "react";
import { ReactComponent as CloseIcon } from "../assets/icons/icon-close.svg";
import { navLinks } from "../constants";

const MobileMenuNavBar = () => {
  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-black z-[999] bg-opacity-70 overflow-auto">
        <div className="p-8 bg-white sm:w-[25vh] sm:h-full md:w-[50%] md:h-full">
          <CloseIcon fill="#adb5bd" />
          <ul className="flex flex-col gap-4 items-start font-kumbh text-[16px] font-bold text-Very-dark-blue mt-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileMenuNavBar;
