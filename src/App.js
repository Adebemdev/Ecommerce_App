import { Hero } from "./sections";
import { NavBar } from "./components/NavBar";
import { LightBox } from "./components/LightBox";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

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
    //Preventing count < 0
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <main className="relative">
      <section className="sm:padding-sm lg:padding-n md:h-[20vh]">
        <NavBar
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onOpen={handleOpen}
          onCartOpen={handleCartOpen}
        />
      </section>
      <section className="sm:p-0 lg:padding-l lg:padding-l wide:padding-r padding-b h-[80vh]">
        <Hero
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          isOpen={isOpen}
          cartOpen={cartOpen}
        />
      </section>
      <section className="absolute">
        <LightBox />
      </section>
    </main>
  );
}

export default App;
