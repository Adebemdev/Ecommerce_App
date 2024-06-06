import React from "react";
import MobileSeparator from "../components/MobileSeparator";
import Product from "./Product";

const Cart = ({ products, onRemoveItem }) => {
  return (
    <div className="fixed md:inset-y-0 md:top-[-140px] md:right-[200px] z-50 sm:inset-y-0 sm:top-[-380px] sm:right-[208px]">
      <div className="absolute flex flex-col justify-center sm:top-1/2 sm:left-auto sm:-translate-x-1/2 sm:-translate-y-1/2 drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[380px] sm:h-[300px] md:w-[350px] md:h-[300px] rounded-md object-contain">
        <h2 className="absolute font-kumbh font-bold p-6 inset-x-0 top-[5px]">
          Cart
        </h2>
        <MobileSeparator className="absolute inset-x-0 top-[70px]" />
        <div className=" flex flex-col gap-2">
          {products.length === 0 ? (
            <p className="text-center font-kumbh text-xl text-Dark-grayish-blue">
              Your cart is empty
            </p>
          ) : (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onRemoveItem={onRemoveItem}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
