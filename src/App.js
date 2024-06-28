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
  const [cartOpen, setCartOpen] = useState(false)
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

  const mainImage = sneakers[currentIndex].thumbnail

  
  const OpenLightbox = () => {
    setLightboxOpen(true)
  }
  const CloseLightbox = () => {
    setLightboxOpen(false)
  }
  
  const CartOpen = () => {
    setCartOpen((cartOpen) => !cartOpen)
  }

  const handleIncreament = (itemId) => {
   const existItem = cart.find(item=> item.id === itemId)
   if(existItem) {
    const updateItem = cart.map(item => item.id === itemId ? {
      ...item, quantity: quantity + 1
    }: item)
    setCart(updateItem);
   }
    else {
      const newItem = { id: sneakers[currentIndex].id, name: "Fall Limited Edition sneaker",
        quantity: quantity, price: 125,
         thumbnail: sneakers[currentIndex].thumbnail
        };
        setCart([...cart, newItem]);
      }
      setQuantity(cart.length + 1)
  };

  const handleDecreament = (itemId) => {
    const updateCartItem = cart.map(item => {
      if(item.id === itemId) {
        const newQuantity = item.quantity - 1;
        if(newQuantity > 0) {
          return {...item, quantity: newQuantity}
        }
      }
      return item;
    }).filter(item => item.quantity > 0)
    setCart(updateCartItem)
    setQuantity(updateCartItem.reduce((total, item) => total + item.quantity, 0))
  }
  
  const handleAddToCart = () => {
  const newItem = { id: sneakers[currentIndex].id, name: "Fall Limited Edition sneaker",
     quantity: quantity, price: 125.00,
      thumbnail: sneakers[currentIndex].thumbnail
     };
     setCart([...cart, newItem]);
     setQuantity((quantity) => quantity + 1)
    }
  
    // quantity={cart.reduce((acc, item) => acc + item.quantity, 0)}


  return (
    <div>
      <NavBar quantity={quantity} onCartOpen={CartOpen} cart={cart} />
      {cartOpen && <Cart cart={cart} setCart={setCart} setQuantity={setQuantity} />}
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

const NavBar = ({ quantity, onCartOpen}) => {
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
    <header className="sticky border-b top-0 z-10 h-24 max-w-[1240px] mx-auto bg-White">
      <div className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center gap-4 ">
        <MenuIcon className="md:hidden mobile:block" />
        <LogoIcon />
        <ul className="md:flex block mobile:hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="p-4 m-2 cursor-pointer duration-300"
            >
              <a
                href={link.href}
                className={`text-[#adb5bd] relative pb-[36px] ${
                  activeLink === link.id
                    ? "hover:text-[#adb5bd]"
                    : "hover:text-[#868e96]"
                  }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="absolute left-0 right-0 bottom-0 h-1 w-auto bg-[#ff922b]"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="relative">
          <CartIcon fill="#868e96" onClick={onCartOpen} />
          <span className="absolute inset-x-2 right-6 top-[-16px] p-3 text-White text-sm font-kumbh font-normal bg-primary-orange w-6 h-6 flex justify-center items-center rounded-full">
            {quantity}
          </span>
        </div>
        <img src={avatarImg} alt="avatar" className="w-10 h-10 border-2 rounded-full border-primary-orange" />
      </div>
    </div>
    </header>
  );
};

const Cart = ({cart, setCart,setQuantity}) => {
  return <div className="bg-White h-[280px] overflow-auto w-[400px] shadow-2xl rounded-xl absolute top-20 right-8 z-10">
    <div>
      <h1 className="font-bold text-xl font-kumb border-b border-Light-Grayish-blue p-6 ">Cart</h1>
      {cart.length === 0 ? <div className="flex items-center justify-center">
        <p className="font-bold text-xl text-Grayish-blue mt-12">Your cart is empty.</p>
      </div>
      : 
      <div className="p-6">
        {cart.map((item, index) => 
        <div key={index} className="flex justify-betwwen items-center">
          <img src={item.thumbnail} alt={item.name} className="w-16 h-16 rounded mb-2" />
          <div className="flex-1 mx-4">
             <p className="text-md text-Grayish-blue font-kumb font-bold">{item.name}</p>
              <p className="text-[16px] font-bold text-Grayish-blue">
                ${item.price} x {item.quantity}{" "}
                <span className="font-bold text-[20px] text-Very-dark-blue">
                  ${(item.price * item.quantity)}
                </span>
              </p>
            </div>
            <DeleteIcon fill="#868e96" className="cursor-pointer h-6 w-6" onClick={() => {
              setCart(prevCart => prevCart.filter((_, i) => i !== index))
              setQuantity((quantity) => quantity - 1)
            }} 
            />
        </div>  
      )}
       <button className="bg-primary-orange p-2 w-full rounded-lg shadow-3xl text-white font-bold text-[18px]">Checkout</button>
      </div>
      }
    </div>
  </div>
}

const Hero = ({ onIncrease, onDecrease, quantity, onOpenLightbox, mainImage, onPrevious, onNext, currentIndex, setCurrentIndex, onAddToCart}) => {


  return (
    <div className="w-full h-screen py-16 px-4">
      <section className="grid grid-cols-2  max-w-[1240px] m-auto">
        <div className="flex flex-col items-center bg-White">
          <div className="relative">
            <img
              src={mainImage}
              alt=""
              className="w-[400px] mx-auto my-6 rounded-md"
              onClick={onOpenLightbox}
            />
            <div
              className="flex items-center  justify-center absolute w-10 h-10 bg-white rounded-full left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
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
          <ul className="flex gap-6">
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
        <div className="flex flex-col justify-center">
          <div className="w-[500px] my-6 mb-8">
            <span className="bg-slate-100 uppercase inline-block mb-4 w-[150px] text-sm font-kumbh font-bold  text-[#ff922b] ">
              Sneaker Company
            </span>
            <h1 className="font-kumh text-4xl mb-10 text-Very-dark-blue leading-[1.25] max-sm:text-[72px] max-sm:leading-[70] font-bold">
              <span>Fall Limited Edition</span>
              <br />
              <span>Sneakers</span>
            </h1>
            <p className="text-lg font-normal font-kumbh text-gray-500 mb-6 leading-7 md:max-w-md">
              These low-profile sneakers are your perfect causual wear
              companion. Featuring a durable rubber outer sole, they'll
              withstand everything the weather can offer.
            </p>

            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold font-kumbh text-Very-dark-blue">
                  $125.00
                </p>
                <p className="bg-primary-pale-orange py-[2px] px-[6px] rounded-md text-sm font-bold font-kumbh text-primary-orange">
                  50%
                </p>
              </div>
              <p className="text-[16px] font-kumbh font-bold text-gray-500 line-through">
                $250.00
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-Light-grayish-blue p-2 w-[150px] rounded-lg flex items-center justify-between">
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
              <button className="bg-primary-orange p-2 w-[200px] rounded-lg shadow-3xl flex items-center justify-center gap-2 transition-transform transform hover:scale-105 outline-none border-none duration-200 will-change-transform" onClick={onAddToCart}>
                <CartIcon fill="hsl(0, 0%, 100%)" />
                <span className="font-bold text-white text-[18px] outline-none">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LightBox = ({onCloseLightbox}) => {
  const [lightboxIndex, setLightboxIndex] = useState(0)
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
        <img src={lightboxImage} alt="Big sneaker" className="w-[400px] h-[400px] rounded-md" />
        <button className="flex items-center  justify-center absolute w-10 h-10 bg-white rounded-full left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
          <PrevIcon  />
        </button>
        <button className="flex items-center  justify-center absolute w-10 h-10 bg-white rounded-full right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
          <NextIcon  />
        </button>
        <button className="absolute top-[-28px] right-[-2px] text-white text-2xl" onClick={onCloseLightbox} >
          <CloseIcon fill="#ff922b"  />
        </button>
        </div>
        <ul className="flex absolute bottom-[-100px] gap-4">
          {sneakers.map((sneaker, index) => 
          <li key={sneaker.id} className={`relative w-20 h-20 ${lightboxIndex === index ? "border-[#ff922b] border-2 rounded-md" : ""}`} onClick={() => setLightboxIndex(index)}>
           <img  src={sneaker.thumbnail} alt="thumbnail images" className="cursor-pointer w-full h-full object-cover rounded-md" />
           {lightboxIndex === index && <div className="absolute inset-0 bg-Grayish-blue bg-opacity-50 rounded-md"></div>}
          </li>)}
        </ul>
        </div>
    </div>
  );
};

export default App;
