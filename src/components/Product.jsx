import React from "react";
import { ReactComponent as DeleteIcon } from "../assets/icons/icon-delete.svg";
import IconButton from "./IconButton";
//   <p className="text-center font-kumbh text-xl text-Dark-grayish-blue">
//     Your cart is empty
//   </p>

const Product = ({ product, onRemoveItem }) => {
  return (
    <div>
      <div key={product.id} className="flex w-[400px] gap-4 px-4">
        <div className="w-1/6">
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
              onClick={() => onRemoveItem(product.id)}
            />
          </div>
          <div className="absolute inset-x-0 bottom-[5%] p-4">
            <IconButton fullwidth>Checkout</IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
