import React from "react";
import MobileSeparator from "../components/MobileSeparator";
import IconButton from "./IconButton";
import { ReactComponent as DeleteIcon } from "../assets/icons/icon-delete.svg";
// import { products } from "../constants";

const Cart = ({ products }) => {
  return (
    <div className="fixed md:inset-y-0  md:top-[-140px] md:right-[240px] z-50 sm:inset-y-0 sm:top-[-360px] right-[208px]">
      <div className="absolute flex flex-col justify-center sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[380px] sm:h-[300px] md:w-[400px] md:h-[300px] rounded-md object-contain">
        <h2 className="absolute font-kumbh font-bold p-6 inset-x-0 top-[5px]">
          Cart
        </h2>
        <MobileSeparator className="absolute inset-x-0 top-[70px]" />
        <div className=" flex flex-col gap-2">
          {products.map((product) => (
            // <Product key={product.id} product={product} />
            <dvi key={product.id} className="flex w-[400px] gap-4 px-4">
              <div className="w-1/6 ">
                <img
                  src={product.bigsneaker}
                  alt={product.name}
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow mt-2">
                <div className="flex gap-2">
                  <div className="leading-[20px]">
                    <h5 className="text-Grayish-blue text-[18px] font-kumbh">
                      {product.name}
                    </h5>
                    <p className="text-Grayish-blue font-bold font-kumbh">
                      ${product.price} x {product.quantity}{" "}
                      <span className="text-Black text-bold font-kumbh">
                        ${product.price * product.quantity}
                      </span>
                    </p>
                  </div>
                  <DeleteIcon
                    fill="#ced4da"
                    className="w-8 h-8 p-2"
                    onClick={() => {}}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-[5%] p-4">
                  <IconButton fullwidth>Checkout</IconButton>
                </div>
              </div>
            </dvi>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
