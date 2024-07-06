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

const newItems = [
  {
    id: 1,
    name: "Fall Limited Edition sneaker",
    quantity: 1,
    price: 125.0,
    thumbnail: sneakers[0].thumbnail,
  },
  {
    id: 2,
    name: "Fall Limited Edition sneaker",
    quantity: 2,
    price: 125.0,
    thumbnail: sneakers[1].thumbnail,
  },
  {
    id: 3,
    name: "Fall Limited Edition sneaker",
    quantity: 3,
    price: 125.0,
    thumbnail: sneakers[2].thumbnail,
  },
];

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

  const handleIncreament = (itemId) => {};

  const handleDecreament = (itemId) => {};

  const handleAddToCart = (cartId) => {
    const existingItem = cart.find((item) => item.id === cartId);
    console.log(existingItem);
    if (existingItem) {
      return {
        ...cart,
        quantity: cart.quantity ? cart.quantity + 1 : 1,
      };
    } else {
      setCart([
        ...cart,
        {
          id: 3,
          name: "Fall Limited Edition sneaker",
          quantity: 3,
          price: 125.0,
          thumbnail: sneakers[2].thumbnail,
        },
      ]);
    }
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
        cart={cart}
        quantity={quantity}
        onIncrease={handleIncreament}
        onDecrease={handleDecreament}
        onOpenLightbox={OpenLightbox}
        mainImage={mainImage}
        onPrevious={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        // onAddToCart={handleAddToCart}
        handleAddToCart={handleAddToCart}
      />
      {lightboxOpen && (
        <LightBox onCloseLightbox={CloseLightbox} className={``} />
      )}
    </div>
  );
};

const NavBar = ({ quantity, onCartOpen, cart }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="relative flex items-center justify-between p-4 border-b border-slate-400 max-w-7xl mx-auto">
      <div className="flex items-center justify-start gap-4">
        <ul className="flex items-center justify-start gap-4">
          {!isOpen && (
            <li>
              <MenuIcon className="lg:hidden" onClick={() => setIsOpen(true)} />
            </li>
          )}
          {isOpen && (
            <li>
              <CloseIcon
                fill="#adb5bd"
                className="lg:hidden close"
                onClick={() => setIsOpen(false)}
              />
            </li>
          )}
          <li>
            <LogoIcon />
          </li>
        </ul>

        <nav className={isOpen ? "open" : null}>
          <ul className="flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="p-2 m-2 cursor-pointer duration-300 lg:p-4"
              >
                <a
                  href={link.href}
                  className={`text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] ${
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
        </nav>
      </div>
      <div>
        <ul className="flex items-center justify-start gap-4">
          <li className="relative">
            <CartIcon fill="#adb5bd" onClick={onCartOpen} />
            {cart.length > 0 ? (
              <span className="absolute inset-x-2 right-6 top-[-16px] p-3 text-White text-sm font-kumbh font-normal bg-primary-orange w-6 h-6 flex justify-center items-center rounded-full">
                {quantity}
              </span>
            ) : (
              ""
            )}
          </li>
          <li>
            <img
              src={avatarImg}
              alt="avatar"
              className="w-10 h-10 hover:border-2 rounded-full hover:border-primary-orange hover:duration-200 hover:ease-in-out hover:transition-transform hover:transform hover:will-change-transform"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

const Cart = ({ cart, setQuantity, onRemoveCart }) => {
  return (
    <div className="bg-White h-[350px] w-[400px] inset-x-0 shadow-2xl overflow-auto rounded-xl absolute top-[80px] z-10 mx-auto lg:inset-y-20 lg:right-[-900px]">
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
  // onAddToCart,
  handleAddToCart,
}) => {
  return (
    <section className="mb-16 z-0">
      <div className="lg:grid lg:mx-auto  lg:p-16 lg:grid-cols-2 lg:gap-y-0 lg:container  lg:items-center lg:gap-x-0">
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

            <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
              <ul className="flex items-center gap-5">
                <li className="text-slate-900 font-bold text-2xl">$125.00</li>
                <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                  50%
                </li>
              </ul>

              <p className="text-slate-600 text-sm font-kumbh font-bold">
                <s>$250.00</s>
              </p>
            </div>

            <div className="flex gap-4 mt-4 flex-col lg:flex-row">
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
                onClick={() => handleAddToCart(newItems.id)}
              >
                <button className="flex items-center justify-center">
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
