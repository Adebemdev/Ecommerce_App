import React from "react";
import MobileSeparator from "./MobileSeparator";
import IconButton from "./IconButton";
import { imageProduct1 } from "../assets/images";
import { ReactComponent as DeleteIcon } from "../assets/icons/icon-delete.svg";

const MobileBasketFilled = () => {
  return (
    <section>
      <div className="fixed sm:top-[-12%] lg:top-0 left-0 w-full h-full sm:p-4 lg:p-8 z-[999] bg-opacity-10 overflow-auto">
        <div className="absolute flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[95%] sm:h-[45%] lg:w-[80vh] lg:h-[70vh] rounded-md object-contain">
          <div className="absolute inset-x-0 top-0">
            <h2 className="font-kumbh font-bold p-4">Cart</h2>
          </div>
          <div className="absolute inset-x-0 top-[15%]">
            <MobileSeparator />
          </div>
          <div className="flex flex-row justify-center gap-4 mb-8 p-4">
            <div className="flex-auto">
              <img
                src={imageProduct1}
                alt="sneaker product"
                width={100}
                height={100}
                className="h-30 w-30 object-contain rounded-md"
              />
            </div>
            <div className="w-[300px] flex flex-col gap-2">
              <p className="text-[18px] leading-[20px] font-kumbh  text-Grayish-blue">
                Fall Limited Edition Sneakers
              </p>
              <p className="sm:text-[18px] font-kumbh text-Grayish-blue">
                $125.00 x 3 <span className=" text-Black">$375.00</span>
              </p>
            </div>
            <div className="flex-auto">
              <DeleteIcon fill="#ced4da" className="w-6 h-6" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-[5%] p-4">
            <IconButton fullwidth>Checkout</IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBasketFilled;
