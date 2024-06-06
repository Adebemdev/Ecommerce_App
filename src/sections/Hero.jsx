import { sneakers } from "../constants";
// import { products } from "../constants";
import IconButton from "../components/IconButton";
import AnotherIconButton from "../components/AnotherIconButton";
import { ReactComponent as CartIcon } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";
import RightIcon from "../assets/icons/icon-next.svg";
import LeftIcon from "../assets/icons/icon-previous.svg";
import MobileMenuNavBar from "../components/MobileMenuNavBar";

export const Hero = ({
  count,
  onDecrease,
  onIncrease,
  isOpen,
  onOpenLightBox,
  currentIndex,
  onNext,
  onThumbnailClick,
  onPrevious,
  onAddToCartItem,
  cartOpen,
  cart,
  totalItems,
}) => {
  return (
    <header
      id="home"
      className="relative sm:pt-0 sm:gap-5 sm:h-auto w-full h-full md:pt-12  max-w-6xl mx-auto flex md:flex-row flex-col justify-center md:gap-16 max-container"
    >
      <div className="sm:flex sm:flex-row md:flex-col gap-4 items-center justify-center mb-10">
        <div className="relative">
          <img
            src={sneakers[currentIndex].bigsneaker}
            alt={`sneaker ${currentIndex + 1}`}
            width={300}
            height={200}
            onClick={onOpenLightBox}
            className="sm:object-contain sm:w-full  sm:rounded-none md:rounded-md md:w-[450px]"
          />
          <ul>
            <li>
              <button
                className="sm:block md:hidden bg-white shadow absolute h-12 w-12 top-1/2 left-4 p-4 rounded-full sm:-translate-y-1/2"
                onClick={onPrevious}
              >
                <img src={LeftIcon} alt="" />
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button
                className="sm:block md:hidden bg-white shadow absolute top-1/2  right-4 h-12 w-12  p-4 rounded-full -translate-y-1/2"
                onClick={onNext}
              >
                <img src={RightIcon} alt="" />
              </button>
            </li>
          </ul>
        </div>
        <div className="sm:hidden md:flex gap-5 w-[450px]">
          {sneakers.map((sneaker, index) => (
            <div
              className="relative flex-grow"
              key={sneaker.id}
              onClick={() => onThumbnailClick(index)}
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
        <p className="sm:uppercase text-xl font-kumbh font-bold text-primary-orange sm:mb-2 bg-Light-grayish-blue p-2">
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
            onClick={() =>
              onAddToCartItem({
                id: sneakers[currentIndex].id,
                name: sneakers[currentIndex].name,
                price: 125.0,
                quantity: count,
                bigsneaker: sneakers[currentIndex].bigsneaker,
              })
            }
          >
            Add to cart
          </IconButton>
        </div>
      </div>
      <div className="md:hidden">{isOpen && <MobileMenuNavBar />}</div>
    </header>
  );
};
