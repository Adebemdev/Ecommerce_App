import React from "react";

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

// export const Button = ({
//   label,
//   iconplus,
//   num,
//   iconMinus,
//   backgroundColor,
// }) => {
//   return (
//     <button
//       className={`sm:inline-block  font-kumbh gap-2 rounded-md ${
//         backgroundColor
//           ? `${backgroundColor} ${iconplus} ${num} ${iconMinus}`
//           : "bg-primary-orange"
//       }`}
//     >
//       <div className="block w-full">
//         {label && (
//           <div className="sm:flex lg:max-w-xl px-10 py-2 shadow-3xl gap-4 lg:w-[220px] ">
//             <CartIcon fill="white" stroke="white" className="w-6 h-6" />
//             <p className="text-white font-kumbh font-semibold">{label}</p>
//           </div>
//         )}

//         {iconMinus && (
//           <div className="sm:flex lg:w-[150px] items-center justify-between p-1">
//             <MinusIcon />
//             {num}
//             <PlusIcon />
//           </div>
//         )}
//       </div>
//     </button>
//   );
// };
export const Button = ({ text, iconCart, iconMinus, iconPlus, className }) => {
  return (
    <button
      className={`font-kumb rounded py-2 px-2 flex items-center ${className} ${
        className === "bg-primary-orange"
          ? `sm:w-full lg:w-[200px] justify-center gap-2`
          : ""
      } ${
        className === "bg-Grayish-blue"
          ? "sm:w-full lg:w-1/2 justify-between"
          : ""
      }`}
    >
      {
        <>
          {iconCart && <span>{iconCart}</span>}
          {text === "Add to the cart" ? text : ""}

          {iconMinus && <span>{iconMinus}</span>}
          {text === 0 ? text : ""}
          {iconPlus && <span>{iconPlus}</span>}
        </>
      }
    </button>
  );
};
