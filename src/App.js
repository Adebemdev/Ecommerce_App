import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "./assets/icons/icon-menu.svg";
import { ReactComponent as LogoIcon } from "./assets/icons/logo.svg";
import { ReactComponent as CartIcon } from "./assets/icons/icon-cart.svg";
import { ReactComponent as CloseIcon } from "./assets/icons/icon-close.svg";
import { ReactComponent as PrevIcon } from "./assets/icons/icon-previous.svg";
import { ReactComponent as NextIcon } from "./assets/icons/icon-next.svg";
import { ReactComponent as DeleteIcon } from "./assets/icons/icon-delete.svg";
import nextIcon from "./assets/icons/icon-next.svg";
import prevIcon from "./assets/icons/icon-previous.svg";
import plusIcon from "./assets/icons/icon-plus.svg";
import minusIcon from "./assets/icons/icon-minus.svg";
import avatarImg from "./image-avatar.png";
import { sneakers } from "./constants";
// import closeIcon from "./assets/icons/icon-close.svg";
// import { imageProduct1 } from "./assets/images";

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sneakers.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sneakers.length - 1 : prevIndex - 1
    );
  };

  const mainImage = sneakers[currentIndex].bigsneaker;

  const OpenLightbox = () => {
    setLightboxOpen(true);
  };
  const CloseLightbox = () => {
    setLightboxOpen(false);
  };

  const CartOpen = () => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  const handleIncreament = (itemId) => {
    const existItem = cart.find((item) => item.id === itemId);
    if (existItem) {
      const updateItem = cart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: quantity + 1,
            }
          : item
      );
      setCart(updateItem);
    } else {
      const newItem = {
        id: sneakers[currentIndex].id,
        name: "Fall Limited Edition sneaker",
        quantity: quantity,
        price: 125,
        thumbnail: sneakers[currentIndex].thumbnail,
      };
      setCart([...cart, newItem]);
    }
    setQuantity(cart.length + 1);
  };

  const handleDecreament = (itemId) => {
    const updateCartItem = cart
      .map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updateCartItem);
    setQuantity(
      updateCartItem.reduce((total, item) => total + item.quantity, 0)
    );
  };

  const handleAddToCart = () => {
    const newItem = {
      id: sneakers[currentIndex].id,
      name: "Fall Limited Edition sneaker",
      quantity: quantity,
      price: 125.0,
      thumbnail: sneakers[currentIndex].thumbnail,
    };
    setCart([...cart, newItem]);
    setQuantity((quantity) => quantity + 1);
  };

  const handleRemoveCart = (itemId) => {
    // setCart((cartItem) => cartItem.filter((item) => item.id !== itemId));
    setCart((prevCart) => prevCart.filter((_, i) => i !== itemId));
  };

  // quantity={cart.reduce((acc, item) => acc + item.quantity, 0)}

  return (
    <div>
      <NavBar quantity={quantity} onCartOpen={CartOpen} cart={cart} />
      {cartOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          setQuantity={setQuantity}
          onRemoveCart={handleRemoveCart}
        />
      )}
      <Hero
        quantity={quantity}
        onIncrease={handleIncreament}
        onDecrease={handleDecreament}
        onOpenLightbox={OpenLightbox}
        mainImage={mainImage}
        onPrevious={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onAddToCart={handleAddToCart}
      />
      {lightboxOpen && <LightBox onCloseLightbox={CloseLightbox} />}
    </div>
  );
};

const NavBar = ({ quantity, onCartOpen, cart }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
  };

  const navLinks = [
    { href: "#Collections", label: "Collections", id: 1 },
    { href: "#Men", label: "Men", id: 2 },
    { href: "#Women", label: "Women", id: 3 },
    { href: "#About", label: "About", id: 4 },
    { href: "#Contact", label: "Contact", id: 5 },
  ];

  return (
    <nav className="w-screen top-0 h-[90px] z-10 border-none fixed drop-shadow-lg lg:border-2 lg:border-[#adb5bd]">
      <div className="flex justify-between items-center bg-White w-full h-full px-8 relative">
        <MenuIcon className="block md:hidden" />
        <LogoIcon />
        <div className="bg-black w-screen h-screen bg-opacity-75 link-lg-none lg:bg-transparent lg:w-auto lg:h-auto lg:bg-opacity-0">
          <ul className="flex absolute w-1/2 h-screen top-0 bg-White items-start flex-col lg:flex-row lg:relative lg:w-auto lg:h-auto lg:top-[-4px]  lg:bg-transparent lg:items-center lg:flex-none lg:inset-x-auto lg:justify-center">
            <CloseIcon fill="#adb5bd" className="lg:hidden m-4 inset-0" />
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="p-2 m-2 cursor-pointer duration-300 lg:p-4"
              >
                <a
                  href={link.href}
                  className={`text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[36px] ${
                    activeLink === link.id
                      ? "hover:text-black lg:hover:text-[#adb5bd]"
                      : "hover:text-Very-dark-blue lg:hover:text-[#868e96]"
                  }`}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <span className="lg:link-lg"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="relative">
            <CartIcon fill="#868e96" onClick={onCartOpen} />
            {cart.length > 0 ? (
              <span className="absolute inset-x-2 right-6 top-[-16px] p-3 text-White text-sm font-kumbh font-normal bg-primary-orange w-6 h-6 flex justify-center items-center rounded-full">
                {quantity}
              </span>
            ) : (
              ""
            )}
          </div>
          <img
            src={avatarImg}
            alt="avatar"
            className="w-10 h-10 border-2 rounded-full border-primary-orange"
          />
        </div>
      </div>
    </nav>
  );
};

const Cart = ({ cart, setQuantity, onRemoveCart }) => {
  return (
    <div className="bg-White h-[400px] w-[460px] inset-x-0 shadow-2xl overflow-auto rounded-xl absolute top-[100px] z-10 mx-auto lg:inset-y-20 lg:right-[-900px]">
      <div>
        <h1 className="font-bold text-xl font-kumb border-b border-Light-Grayish-blue p-6 ">
          Cart
        </h1>
        {cart.length === 0 ? (
          <div className="flex items-center justify-center relative">
            <p className="font-bold text-xl text-Grayish-blue mt-[120px] absolute top-1/2 transform -translate-y-1/2">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="p-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-betwwen items-center mb-6"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <div className="flex-1 mx-4">
                  <p className="text-md text-Grayish-blue font-kumb font-bold">
                    {item.name}
                  </p>
                  <p className="text-[16px] font-bold text-Grayish-blue">
                    ${item.price} x {item.quantity}{" "}
                    <span className="font-bold text-[20px] text-Very-dark-blue">
                      ${item.price * item.quantity}
                    </span>
                  </p>
                </div>
                <DeleteIcon
                  fill="#868e96"
                  className="cursor-pointer h-6 w-6"
                  onClick={() => {
                    onRemoveCart(index);
                    setQuantity((quantity) => quantity - 1);
                  }}
                />
              </div>
            ))}
            <button className="bg-primary-orange p-4 w-full rounded-lg shadow-3xl text-white font-bold text-[18px]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero = ({
  onIncrease,
  onDecrease,
  quantity,
  onOpenLightbox,
  mainImage,
  onPrevious,
  onNext,
  currentIndex,
  setCurrentIndex,
  onAddToCart,
}) => {
  return (
    // <div className="w-full h-[100dvh] py-16 px-4 bg-black">
    // grid grid-template-rows-[1fr auto] py-16 px-4 w-screen md:grid-cols-2 mx-auto bg-red-500
    // grid mx-auto pt-12 p-16 grid-cols-1 gap-y-0 lg:container lg:pt-40 lg:grid-cols-2 lg:items-center lg:gap-x-0
    <section className="mb-16 z-0 py-8">
      <div className="pt-10  lg:grid lg:mx-auto  lg:p-16 lg:grid-cols-2 lg:gap-y-0 lg:container lg:pt-40 lg:items-center lg:gap-x-0">
        <div className="lg:mx-auto flex gap-6 flex-col">
          <div className="relative">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:w-[400px] rounded-none lg:rounded-md"
              onClick={onOpenLightbox}
            />
            <div
              className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={onPrevious}
            >
              <img src={prevIcon} alt="Previous" />
            </div>
            <div
              className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={onNext}
            >
              <img src={nextIcon} alt="Next" />
            </div>
          </div>
          <ul className="hidden md:flex gap-6 ">
            {sneakers.map((sneaker, index) => (
              <li
                key={sneaker.id}
                className={`relative w-20 h-20 ${
                  currentIndex === index
                    ? "border-[#ff922b] border-2 rounded-md"
                    : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={sneaker.thumbnail}
                  alt={`Sneaker ${sneaker.id}`}
                  className="cursor-pointer w-full h-full object-cover rounded-md"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-Grayish-blue bg-opacity-50 rounded-md"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center p-6">
          <div className="">
            <span className="uppercase inline-block mb-4 mt-4 w-[150px] tracking-[.4px] text-sm font-kumbh font-bold text-[#ff922b] ">
              Sneaker Company
            </span>
            <h1 className="font-kumh text-4xl mb-8 text-Very-dark-blue leading-[1.25] lg:max-sm:text-[72px]  lg:max-sm:leading-[70] font-bold">
              <span>Fall Limited Edition</span>
              <br />
              <span>Sneakers</span>
            </h1>
            <p className="text-lg font-normal mb-4 font-kumbh text-gray-400 tracking-tighter leading-8 lg:leading-8 md:max-w-md">
              These low-profile sneakers are your perfect causual wear
              companion. Featuring a durable rubber outer sole, they'll
              withstand everything the weather can offer.
            </p>

            <div className="flex flex-row gap-4 mb-6 lg:flex lg:flex-col lg:justify-between">
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold font-kumbh text-Very-dark-blue">
                  $125.00
                </p>
                <p className="bg-primary-pale-orange py-[2px] px-[6px] rounded-md text-sm font-bold font-kumbh text-primary-orange">
                  50%
                </p>
              </div>
              <div className="mr-[-40px] lg:mr-0">
                <p className="text-[16px] font-kumbh font-bold text-gray-400 line-through">
                  $250.00
                </p>
              </div>
            </div>

            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="bg-Light-grayish-blue p-4 w-full lg:w-1/3 rounded-lg flex items-center justify-between">
                <button
                  className="flex items-center justify-center transition-transform transform hover:scale-110 duration-200"
                  onClick={onDecrease}
                >
                  <img src={minusIcon} alt="minus icon" />
                </button>
                <span className="text-[18px] font-kumbh font-bold text-Very-dark-blue">
                  {quantity}
                </span>
                <button
                  className="flex items-center justify-center transition-transform transform hover:scale-110 duration-200"
                  onClick={onIncrease}
                >
                  <img src={plusIcon} alt="plus icon" />
                </button>
              </div>
              <div
                className="bg-primary-orange shadow-3xl rounded-lg p-4 w-full lg:w-1/2 flex gap-4 items-center justify-center transition-transform transform hover:scale-105 outline-none border-none duration-200 will-change-transform"
                onClick={onAddToCart}
              >
                <button
                  className="flex items-center justify-center"
                  // onClick={onAddToCart}
                >
                  <CartIcon fill="hsl(0, 0%, 100%)" />
                </button>
                <button>
                  <p className="font-bold text-white text-[18px] outline-none">
                    Add to cart
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LightBox = ({ onCloseLightbox }) => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const handleNext = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === sneakers.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? sneakers.length - 1 : prevIndex - 1
    );
  };

  const lightboxImage = sneakers[lightboxIndex].thumbnail;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative flex items-center justify-center">
        <div>
          <img
            src={lightboxImage}
            alt="Big sneaker"
            className="w-[400px] h-[400px] rounded-md"
          />
          <button
            className="flex items-center  justify-center absolute w-10 h-10 bg-white rounded-full left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handlePrev}
          >
            <PrevIcon />
          </button>
          <button
            className="flex items-center  justify-center absolute w-10 h-10 bg-white rounded-full right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <NextIcon />
          </button>
          <button
            className="absolute top-[-28px] right-[-2px] text-white text-2xl"
            onClick={onCloseLightbox}
          >
            <CloseIcon fill="#ff922b" />
          </button>
        </div>
        <ul className="flex absolute bottom-[-100px] gap-4">
          {sneakers.map((sneaker, index) => (
            <li
              key={sneaker.id}
              className={`relative w-20 h-20 ${
                lightboxIndex === index
                  ? "border-[#ff922b] border-2 rounded-md"
                  : ""
              }`}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={sneaker.thumbnail}
                alt="thumbnail images"
                className="cursor-pointer w-full h-full object-cover rounded-md"
              />
              {lightboxIndex === index && (
                <div className="absolute inset-0 bg-Grayish-blue bg-opacity-50 rounded-md"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
