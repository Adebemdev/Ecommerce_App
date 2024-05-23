import React from "react";
import MobileSeparator from "./MobileSeparator";
import IconButton from "./IconButton";
import { bigSneaker1 } from "../assets/images";
import { ReactComponent as DeleteIcon } from "../assets/icons/icon-delete.svg";

const MobileBasketFilled = () => {
  return (
    <section>
      <div className="fixed sm:top-[-200px] md:top-[-70px] md:left-[440px] w-full h-full sm:p-4 md:p-8 z-[999] bg-opacity-10 overflow-auto">
        <div className="absolute flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[300px] rounded-md object-contain">
          <h2 className="font-kumbh font-bold p-4 absolute inset-x-0 top-[16px]">
            Cart
          </h2>
          <MobileSeparator className="absolute inset-x-0 top-[80px]" />
          <div className="flex flex-row justify-center gap-4 p-4">
            <div>
              <img
                src={bigSneaker1}
                alt="sneaker product"
                width={100}
                height={100}
                className="object-contain rounded-md w-[100px]"
              />
            </div>
            <div className="w-auto">
              <p className="text-[18px] leading-[30px] font-kumbh text-Grayish-blue">
                Fall Limited Edition Sneakers $125.00 x 3{" "}
                <span className="text-[18px] font-bold font-kumbh text-Black">
                  $375.00
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <DeleteIcon fill="#ced4da" className="w-8 h-8" />
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
