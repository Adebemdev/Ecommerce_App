import React from "react";
import { ReactComponent as CartIcon } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";

// export const Button = ({
//   label,
//   iconUrl,
//   iconplus,
//   num,
//   iconMinus,
//   backgroundColor,
//   fill,
// }) => {
//   return (
//     <button
//       className={`inline-block sm:flex items-center font-kumbh gap-2 rounded-md ${
//         backgroundColor
//           ? `${backgroundColor} ${iconplus} ${num} ${iconMinus}`
//           : "bg-primary-orange"
//       }`}
//     >
//       {iconplus && (
//         <div className="flex w-[150px] items-center justify-between p-4">
//           <img src={iconMinus} alt={label} />
//           <p>{num}</p>
//           <img src={iconplus} alt={label} />
//         </div>
//       )}

//       {iconUrl && (
//         <div className="flex max-w-sm px-16 py-4 shadow-3xl gap-4">
//           <img src={iconUrl} alt={label} className="" />
//           <p className="text-white font-kumbh font-semibold">{label}</p>
//         </div>
//       )}
//     </button>
//   );
// };

export const Button = ({
  label,
  iconplus,
  num,
  iconMinus,
  backgroundColor,
}) => {
  return (
    <button
      className={`inline-block sm:flex items-center font-kumbh gap-2 rounded-md ${
        backgroundColor
          ? `${backgroundColor} ${iconplus} ${num} ${iconMinus}`
          : "bg-primary-orange"
      }`}
    >
      {label && (
        <div className="flex max-w-sm px-4 py-2 shadow-3xl gap-4">
          <CartIcon fill="white" stroke="white" className="w-6 h-6" />
          <p className="text-white font-kumbh font-semibold">{label}</p>
        </div>
      )}

      {iconMinus && (
        <div className="flex w-[100px] items-center justify-between p-2">
          <MinusIcon />
          {num}
          <PlusIcon />
        </div>
      )}
    </button>
  );
};
