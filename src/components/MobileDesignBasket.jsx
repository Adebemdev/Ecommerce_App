import React from "react";
import MobileSeparator from "./MobileSeparator";

const MobileDesignBasket = () => {
  return (
    <section className="relative">
      <div className="fixed sm:top-[20px] md:top-0 left-0 w-full h-full sm:p-4 md:p-8 z-[999] bg-opacity-10 overflow-auto">
        <div className="absolute flex flex-col justify-center sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[300px] sm:h-[300px] md:w-[] md:h-[] rounded-md object-contain">
          <h2 className="absolute font-kumbh font-bold p-4 inset-x-0 top-[20px]">
            Cart
          </h2>
          <MobileSeparator className="absolute inset-x-0 top-[20px]" />
          <p className="text-center font-kumbh text-xl text-Dark-grayish-blue">
            Your cart is empty
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileDesignBasket;
