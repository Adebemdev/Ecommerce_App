import { navLinks } from "../constants";
import { ReactComponent as Cartlink } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MenuLink } from "../assets/icons/icon-menu.svg";
import { imageAvatar } from "../assets/images";
import Logo from "../assets/icons/logo.svg";
import { useState } from "react";
import Cart from "../components/Cart";

export const NavBar = ({
  count,
  onOpen,
  onCartOpen,
  onRemoveItem,
  products,
  cartOpen,
}) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 md:p-3 md:border-b-[1.5px] md: border-slate-400 max-w-5xl mx-auto bg-White">
      <div className="relative">
        <nav className="sm:flex justify-between sm:h-full sm:p-4 md:px-0">
          <div className="flex justify-center items-center gap-16">
            <div className="flex justify-center items-center sm:gap-4">
              <div className="md:hidden">
                <MenuLink onClick={onOpen} className="cursor-pointer" />
              </div>
              <img src={Logo} alt="" />
            </div>
            <ul className="absolute top-[-6px] left-[250px] flex max-md:hidden gap-4 justify-center items-center font-kumbh text-sm font-normal text-Grayish-blue mt-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    style={{ border: "none", padding: "5px 10px" }}
                    className={`relative text-center ${
                      activeLink === link.id
                        ? "text-primary-orange"
                        : "text-Very-dark-blue"
                    }`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                    <span
                      className={`${
                        activeLink === link.id
                          ? "absolute inset-x-0 bottom-[-28px] h-1 text-center bg-primary-orange"
                          : ""
                      }`}
                    />
                  </a>
                </li>
              ))}{" "}
            </ul>
          </div>
          <div className="sm:gap-4 sm:flex sm:items-center md:flex md:items-center md:gap-8">
            <div className="relative">
              <Cartlink
                fill="#ced4da"
                stroke="#ced4da"
                className="font-normal cursor-pointer"
                onClick={onCartOpen}
              />
              {count > 0 && (
                <span className="absolute sm:block md:block lg:block grid place-items-center text-center top-[-14px] right-[-12px] w-5 h-5 rounded-full bg-primary-orange text-sm text-White">
                  {count}
                </span>
              )}
              <div>
                {cartOpen && (
                  <Cart products={products} onRemoveItem={onRemoveItem} />
                )}
              </div>
            </div>

            <div
              className="border-2 border-orange-500 rounded-full w-8 h-8 cursor-pointer"
              onClick={onCartOpen}
            >
              <img src={imageAvatar} alt="Avatar" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
