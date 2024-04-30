import React from "react";
import MobileSeparator from "./MobileSeparator";

const MobileDesignBasket = () => {
  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full p-8  z-[999] bg-opacity-10 overflow-auto">
        <div className="absolute gap-50 flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.3)] bg-white w-[80vh] h-[70vh] rounded-md object-contain">
          <div>
            <h2 className="text-xl font-kumbh font-bold">Cart</h2>
            <MobileSeparator />
            <p className=" text-xl font-kumbh font-normal text-center text-Grayish-blue">
              Your cart is empty!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDesignBasket;
