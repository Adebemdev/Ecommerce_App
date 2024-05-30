import { Hero } from "./sections";
import { NavBar } from "./components/NavBar";
import { LightBox } from "./components/LightBox";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

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
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
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
          onOpenLightBox={handleLightBoxOpen}
        />
      </section>
      <section className="absolute">{lightBoxOpen && <LightBox />}</section>
    </main>
  );
}

export default App;
