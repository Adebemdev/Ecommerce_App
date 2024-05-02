import React from "react";
import MobileSeparator from "./MobileSeparator";

const MobileDesignBasket = () => {
  return (
    <section className="relative">
      <div className="fixed sm:top-[20px] lg:top-0 left-0 w-full h-full sm:p-4 lg:p-8 z-[999] bg-opacity-10 overflow-auto">
        <div className="absolute flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[300px] sm:h-[300px] lg:w-[80vh] lg:h-[70vh] rounded-md object-contain">
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
