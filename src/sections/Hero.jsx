import { iconCart, iconMinus, iconPlus } from "../assets/icons";
import { imageProduct1 } from "../assets/images";
import { Button } from "../components/Button";
import { sneakers } from "../constants";
import { Sneaker } from "../components/Sneaker";
// import { useState } from "react";

export const Hero = () => {
  // const [bigShoeImg, setBigShoeImg] = useState(imageProduct1);
  return (
    <section
      id="home"
      className="w-full pt-4 flex xl:flex-row flex-col justify-center gap-20 max-container"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={imageProduct1}
          alt="sneaker product"
          width={350}
          height={300}
          className="object-contain relative z-10 rounded-md flex-none mb-7"
        />
        <div className="flex sm:gap-7 w-[340px]">
          {sneakers.map((sneaker, index) => (
            <div className="relative">
              <div
                className={`${
                  index === 0
                    ? "absolute bg-Grayish-blue top-0 left-0 w-full h-full opacity-50 rounded-md border-solid border-2 border-primary-orange"
                    : ""
                }`}
              ></div>
              <div key={sneaker} className="flex-auto">
                <Sneaker imgURL={sneaker} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative xl:w-2/5 flex flex-col items-start max-xl:padding-x pt-10">
        <p className="sm:uppercase font-kumbh font-bold text-primary-orange">
          Sneaker company
        </p>
        <h1 className="sm:font-kumbh text-4xl max-sm:text-[72px] max-sm:leading-[80] font-bold text-Very-dark-blue mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="sm:mb-4 font-kumbh text-Dark-grayish-blue leading-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="sm:flex flex-col justify-center mb-4">
          <div className="sm:flex items-center justify-center mb-2">
            <p className="text-Very-dark-blue text-xl font-bold mr-2">
              $125.00
            </p>
            <p className="text-primary-orange text-[10px] rounded font-kumbh font-bold px-1 py-[.5px] bg-primary-pale-orange">
              50%
            </p>
          </div>
          <div className="inline-block">
            <p className="sm:text-xs text-Grayish-blue font-kumbh font-semibold line-through">
              $250.00
            </p>
          </div>
        </div>

        <div className="sm:flex  flex flex-wrap gap-4">
          <Button
            iconplus={iconPlus}
            num={0}
            iconMinus={iconMinus}
            backgroundColor="bg-Light-grayish-blue"
          />
          <Button label="Add to cart" iconUrl={iconCart} />
        </div>
      </div>
    </section>
  );
};
