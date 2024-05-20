import { sneakers } from "../constants";
import IconButton from "../components/IconButton";
import AnotherIconButton from "../components/AnotherIconButton";
import { ReactComponent as CartIcon } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";
import { ReactComponent as NextIcon } from "../assets/icons/icon-next.svg";
import { ReactComponent as PrevIcon } from "../assets/icons/icon-previous.svg";
import MobileButton from "../components/MobileButton";
import MobileMenuNavBar from "../components/MobileMenuNavBar";
import MobileBasketFilled from "../components/MobileBasketFilled";
import MobileDesignBasket from "../components/MobileDesignBasket";
import { useState } from "react";

// import { useState } from "react";

export const Hero = ({ count, onDecrease, onIncrease }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevSneakerIndex) =>
      prevSneakerIndex === sneakers.length - 1 ? 0 : prevSneakerIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevSneakerIndex) =>
      prevSneakerIndex === 0 ? sneakers.length - 1 : prevSneakerIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <header
      id="home"
      className="relative sm:pt-0 sm:gap-5 sm:h-auto w-full h-full md:pt-12 md:p-0 flex md:flex-row flex-col justify-center md:gap-20 max-container"
    >
      <div className="top-0 right-0 sm:flex sm:flex-row md:flex-col gap-4 items-center justify-center">
        <div className="relative">
          <div className="sm:block md:block absolute right-0 top-1/2 cursor-pointer">
            <MobileButton>{<NextIcon onClick={handleNext} />}</MobileButton>
          </div>
          <div className="sm:block md:block absolute left-[9%] top-1/2">
            <MobileButton>{<PrevIcon onClick={handlePrevious} />}</MobileButton>
          </div>

          <img
            src={sneakers[currentIndex].bigsneaker}
            alt={`sneaker ${currentIndex + 1}`}
            width={450}
            height={400}
            className="sm:object-contain sm:h-full sm:w-full sm:overflow-hidden sm:rounded-none md:rounded-md md:z-10 md:w-[450px] md:mb-0 "
          />
        </div>
        <div className="sm:hidden md:flex gap-5 w-[450px]">
          {sneakers.map((sneaker, index) => (
            <div
              className="relative flex-grow"
              key={sneaker.bigshoe}
              onClick={() => handleThumbnailClick(index)}
            >
              <div
                className={`${
                  index === currentIndex
                    ? "absolute bg-Grayish-blue w-full h-full opacity-50 rounded-md cursor-pointer"
                    : index === 0
                    ? "border-solid border-2 border-primary-orange opacity-50 absolute rounded-md bg-Grayish-blue w-full h-full"
                    : ""
                }`}
              ></div>
              <img
                src={sneaker.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="sm:pt-0 sm:padding-xn relative md:w-2/5 flex flex-col items-start max-xl:padding-x md:padding-t">
        <p className="sm:uppercase text-xl font-kumbh font-bold text-primary-orange sm:mb-2">
          sneaker company
        </p>
        <h1 className="sm:text-[30px] sm:leading-[40px] sm:font-kumbh md:text-4xl max-sm:leading-[20px] font-bold text-Very-dark-blue mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="sm:mb-4 sm:leading-7  lg:text-xl  font-kumbh text-Dark-grayish-blue lg:leading-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole,they’ll withstand everything the
          weather can offer.
        </p>

        <div className="sm:flex sm:w-full sm:items-center sm:justify-between md:flex-col md:justify-center mb-4 md:w-[120px] md:items-start">
          <div className="sm:flex  items-center justify-center mb-2">
            <p className="sm:text-3xl text-Very-dark-blue md:text-2xl font-bold mr-4">
              $125.00
            </p>
            <p className="sm:text-[20px] sm:text-center text-primary-orange md:text-[12px] rounded font-kumbh font-bold px-2 py-[1px] bg-primary-pale-orange">
              50%
            </p>
          </div>
          <div className="inline-block">
            <p className="sm:text-lg md:text-sm text-Grayish-blue font-kumbh font-semibold line-through">
              $250.00
            </p>
          </div>
        </div>
        {/* sm:flex sm:flex-col lg:flex-row  lg:gap-4 mt-2 */}
        <div className="flex gap-4 w-full sm:flex-col md:flex-row py-4">
          <AnotherIconButton
            icons={[
              <MinusIcon onClick={onDecrease} />,
              <PlusIcon onClick={onIncrease} />,
            ]}
          >
            {count}
          </AnotherIconButton>
          <IconButton icon={<CartIcon fill="white" stroke="white" />}>
            Add to cart
          </IconButton>
        </div>
      </div>
      <div className="sm:hidden md:hidden">
        <MobileMenuNavBar />
      </div>
      <div className="sm:hidden md:hidden">
        <MobileDesignBasket />
      </div>
      <div className="sm:hidden md:hidden">
        <MobileBasketFilled />
      </div>
    </header>
  );
};
