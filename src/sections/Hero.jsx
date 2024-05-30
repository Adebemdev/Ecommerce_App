import { sneakers } from "../constants";
import { products } from "../constants";
import IconButton from "../components/IconButton";
import AnotherIconButton from "../components/AnotherIconButton";
import { ReactComponent as CartIcon } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";
import { ReactComponent as NextIcon } from "../assets/icons/icon-next.svg";
import { ReactComponent as PrevIcon } from "../assets/icons/icon-previous.svg";
import MobileButton from "../components/MobileButton";
import MobileMenuNavBar from "../components/MobileMenuNavBar";
import { ReactComponent as DeleteIcon } from "../assets/icons/icon-delete.svg";
import MobileSeparator from "../components/MobileSeparator";

import { useState } from "react";

export const Hero = ({
  count,
  onDecrease,
  onIncrease,
  isOpen,
  cartOpen,
  onOpenLightBox,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState(products);

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

  const handleAddToCart = () => {
    const existingItemCart = cart.findIndex(
      (item) => item.id === sneakers[currentIndex].id
    );

    if (existingItemCart >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemCart].quantity += count;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...sneakers[currentIndex],
          quantity: count,
        },
      ]);
    }
  };

  const handleIncreaseCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <header
      id="home"
      className="relative sm:pt-0 sm:gap-5 sm:h-auto w-full h-full md:pt-12 md:p-0 flex md:flex-row flex-col justify-center md:gap-16 max-container"
    >
      <div className="top-0 right-0 sm:flex sm:flex-row md:flex-col gap-4 items-center justify-center mb-10">
        <div className="relative">
          <div className="sm:block md:hidden absolute right-0 top-1/2 cursor-pointer">
            <MobileButton>{<NextIcon onClick={handleNext} />}</MobileButton>
          </div>
          <div className="sm:block md:hidden absolute left-[9%] top-1/2">
            <MobileButton>{<PrevIcon onClick={handlePrevious} />}</MobileButton>
          </div>

          <img
            src={sneakers[currentIndex].bigsneaker}
            alt={`sneaker ${currentIndex + 1}`}
            width={450}
            height={400}
            onClick={onOpenLightBox}
            className="sm:object-contain sm:h-full sm:w-full sm:overflow-hidden sm:rounded-none md:rounded-md md:z-10 md:w-[450px] md:mb-0"
          />
        </div>
        <div className="sm:hidden md:flex gap-5 w-[450px]">
          {sneakers.map((sneaker, index) => (
            <div
              className="relative flex-grow"
              key={sneaker.id}
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
        <div className="flex gap-4 w-full sm:flex-col md:flex-row py-4">
          <AnotherIconButton
            icons={[
              <MinusIcon onClick={onDecrease} />,
              <PlusIcon onClick={onIncrease} />,
            ]}
          >
            {count}
          </AnotherIconButton>
          <IconButton
            icon={<CartIcon fill="white" stroke="white" />}
            onClick={handleAddToCart}
          >
            Add to cart
          </IconButton>
        </div>
      </div>
      <div className="md:hidden">{isOpen && <MobileMenuNavBar />}</div>

      <div className="">
        <div className="fixed md:inset-y-0  md:top-[-140px] md:right-[240px] z-50 sm:inset-y-0 sm:top-[-360px] right-[208px]">
          <div className="absolute flex flex-col justify-center sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] drop-shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-white sm:w-[380px] sm:h-[300px] md:w-[400px] md:h-[300px] rounded-md object-contain">
            <h2 className="absolute font-kumbh font-bold p-6 inset-x-0 top-[5px]">
              Cart
            </h2>
            <MobileSeparator className="absolute inset-x-0 top-[70px]" />
            {cart.length === 0 ? (
              <p className="text-center font-kumbh text-xl text-Dark-grayish-blue">
                Your cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex w-[400px] gap-4 px-4">
                  <div className="w-1/6">
                    <img
                      src={item.bigsneaker}
                      alt={`Big Sneaker ${item.id + 1}`}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-grow mt-2">
                    <div className="flex gap-2">
                      <div className="leading-[20px]">
                        <h5 className="text-Grayish-blue text-[18px] font-kumbh">
                          {item.name}
                        </h5>
                        <p className="text-Grayish-blue font-bold font-kumbh">
                          ${item.price} x {item.quantity}{" "}
                          <span className="text-Black text-bold font-kumbh">
                            ${item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                      <DeleteIcon
                        fill="#ced4da"
                        className="w-8 h-8 p-2"
                        onClick={() => handleRemoveItem(item.id)}
                      />
                    </div>
                    {/* <div className="flex gap-2 mt-4">
                      <IconButton onClick={() => handleDecreaseCart(item.id)}>
                        <MinusIcon />
                      </IconButton>
                      <span className="flex items-center justify-center w-8 h-8">
                        {item.quantity}
                      </span>
                      <IconButton onClick={() => handleIncreaseCart(item.id)}>
                        <PlusIcon />
                      </IconButton>
                    </div> */}
                  </div>
                </div>
              ))
            )}
            {cart.length > 0 && (
              <div className="absolute inset-x-0 bottom-[5%] p-4">
                <IconButton fullwidth>Checkout</IconButton>
              </div>
            )}
          </div>
        </div>
        )
      </div>
    </header>
  );
};
