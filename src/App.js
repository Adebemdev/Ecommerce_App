import { Hero } from "./sections";
import { NavBar } from "./components/NavBar";
import { LightBox } from "./components/LightBox";
import { sneakers, products } from "../src/constants";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [cart, setCart] = useState(products);
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

  const handleLightBoxOpen = () => {
    setLightBoxOpen((lightBoxOpen) => !lightBoxOpen);
  };

  const handleCartOpen = () => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  const handleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = (item) => {
    const existingItemCart = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    console.log(existingItemCart);

    if (existingItemCart >= 0) {
      const updatedCart = [...cart];
      console.log(updatedCart);
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

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setCount(count - 1);
  };

  // const totalCartInItems = cart.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  return (
    <main className="relative">
      <section className="sm:padding-sm lg:padding-n md:h-[20vh]">
        <NavBar
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onOpen={handleOpen}
          onCartOpen={handleCartOpen}
          cart={cart}
        />
      </section>
      <section className="sm:p-0 lg:padding-l lg:padding-l wide:padding-r padding-b h-[80vh]">
        <Hero
          count={count}
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          isOpen={isOpen}
          cartOpen={cartOpen}
          onOpenLightBox={handleLightBoxOpen}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onThumbnailClick={handleThumbnailClick}
          onAddToCartItem={handleAddToCart}
          onRemoveItem={handleRemoveItem}
        />
      </section>
      <section className="absolute">{lightBoxOpen && <LightBox />}</section>
    </main>
  );
}

export default App;
