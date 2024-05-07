import { navLinks } from "../constants";
import { ReactComponent as Cartlink } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MenuLink } from "../assets/icons/icon-menu.svg";
import { imageAvatar } from "../assets/images";
import { Separator } from "./Separator";

export const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 sm:w-auto sm:p-0 padding-nx md:w-[85%] h-auto m-auto bg-White">
      <div className="relative">
        <nav className="sm:flex justify-between sm:h-full sm:p-4 md:px-8">
          <div className="flex justify-center items-center gap-16">
            <div className="flex justify-center items-center sm:gap-4">
              <div className="sm:block md:hidden">
                <MenuLink />
              </div>
              <h1 className="sm:text-2xl md:text-[40px] sm:lowercase tracking-tighter text-Very-dark-blue font-kumbh font-bold">
                Sneakers
              </h1>
            </div>
            <ul className="absolute top-[-6px] left-[250px] flex max-md:hidden gap-4 justify-center items-center font-kumbh text-sm font-normal text-Grayish-blue mt-8">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b-2 border-b-orange-400 pb-10 cursor-pointer"
                >
                  <a href={link.href} className="">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:gap-4 sm:flex sm:items-center md:flex md:items-center md:gap-8">
            <div className="relative">
              <Cartlink
                fill="#ced4da"
                stroke="#ced4da"
                className="font-normal cursor-pointer"
              />
              <span className="absolute sm:block md:block lg:block grid place-items-center text-center top-[-14px] right-[-12px] w-5 h-5 rounded-full bg-primary-orange text-sm text-White">
                3
              </span>
            </div>
            <div>
              <img src={imageAvatar} alt="Avatar" className="h-14 w-14" />
            </div>
          </div>
        </nav>
        <div className="sm:hidden md:block">
          <Separator />
        </div>
      </div>
    </header>
  );
};
