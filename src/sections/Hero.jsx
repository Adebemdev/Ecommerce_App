import { imageProduct1 } from "../assets/images";
import { sneakers } from "../constants";
import { Sneaker } from "../components/Sneaker";
import IconButton from "../components/IconButton";
import AnotherIconButton from "../components/AnotherIconButton";
import { ReactComponent as CartIcon } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";
// import { useState } from "react";

export const Hero = () => {
  // const [bigShoeImg, setBigShoeImg] = useState(imageProduct1);
  return (
    <section
      id="home"
      className="sm:pt-0 sm:gap-5 sm:h-auto w-full xl:h-[100vh] pt-10 flex xl:flex-row flex-col justify-center lg:gap-20 max-container"
    >
      <div className="sm:flex sm:flex-row lg:flex-col gap-4 items-center justify-center">
        <div>
          <img
            src={imageProduct1}
            alt="sneaker product"
            width={450}
            height={400}
            className="sm:object-contain sm:h-full sm:w-full sm:overflow-hidden sm:rounded-none md:rounded-md  md:relative md:z-10  lg:rounded-xl lg:w-[450px] xl:mb-7 "
          />
        </div>
        <div className="sm:hidden lg:flex gap-7 w-[450px]">
          {sneakers.map((sneaker, index) => (
            <div className="relative flex-grow" key={sneaker.bigshoe}>
              <div
                className={`${
                  index === 0
                    ? "absolute bg-Grayish-blue w-full h-full opacity-50 rounded-md border-solid border-2 border-primary-orange"
                    : ""
                }`}
              ></div>
              <div>
                <Sneaker imgURL={sneaker} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:pt-0 sm:padding-xn relative xl:w-2/5 flex flex-col items-start max-xl:padding-x lg:padding-t">
        <p className="sm:uppercase text-xl font-kumbh font-bold text-primary-orange sm:mb-2">
          sneaker company
        </p>
        <h1 className="sm:text-[30px] sm:leading-[40px] sm:font-kumbh lg:text-4xl max-sm:leading-[20px] font-bold text-Very-dark-blue mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="sm:mb-4 sm:leading-7  lg:text-xl  font-kumbh text-Dark-grayish-blue lg:leading-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole,they’ll withstand everything the
          weather can offer.
        </p>

        <div className="sm:flex sm:w-full sm:items-center sm:justify-between lg:flex-col lg:justify-center mb-4 lg:w-[120px] lg:items-start">
          <div className="sm:flex  items-center justify-center mb-2">
            <p className="sm:text-3xl text-Very-dark-blue lg:text-2xl font-bold mr-4">
              $125.00
            </p>
            <p className="sm:text-[20px] sm:text-center text-primary-orange lg:text-[12px] rounded font-kumbh font-bold px-2 py-[1px] bg-primary-pale-orange">
              50%
            </p>
          </div>
          <div className="inline-block">
            <p className="sm:text-lg lg:text-sm text-Grayish-blue font-kumbh font-semibold line-through">
              $250.00
            </p>
          </div>
        </div>
        {/* sm:flex sm:flex-col lg:flex-row  lg:gap-4 mt-2 */}
        <div className="flex gap-4 w-full sm:flex-col lg:flex-row py-4">
          <AnotherIconButton icons={[<MinusIcon />, <PlusIcon />]}>
            0
          </AnotherIconButton>
          <IconButton icon={<CartIcon fill="white" stroke="white" />}>
            Add to cart
          </IconButton>
        </div>
      </div>
    </section>
  );
};
