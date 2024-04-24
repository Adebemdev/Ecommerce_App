import { navLinks } from "../constants";
import { ReactComponent as Cartlink } from "../assets/icons/icon-cart.svg";
import { ReactComponent as MenuLink } from "../assets/icons/icon-menu.svg";
import { imageAvatar } from "../assets/images";
import { Separator } from "./Separator";

export const NavBar = () => {
  return (
    <header className="sm:w-auto sm:p-0  padding-nx lg:w-[90%] m-auto pb-4">
      <nav className="sm:flex justify-between ">
        <div className="flex justify-center items-center gap-16">
          <div className="flex justify-center items-center gap-4">
            <div className="sm:block xl:hidden">
              <MenuLink />
            </div>
            <h1 className="text-2xl font-kumbh font-bold">Sneakers</h1>
          </div>
          <ul className="flex max-lg:hidden gap-4 justify-center items-center font-kumbh text-sm font-normal text-Grayish-blue mt-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="cursor-pointer hidden:border-b-2 border-b-orange-400 pb-6"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:gap-4 sm:flex sm:items-center lg:flex lg:items-center lg:gap-8">
          <div className="relative">
            <Cartlink
              fill="#ced4da"
              stroke="#ced4da"
              className="font-normal cursor-pointer"
            />
            <span className="absolute sm:hidden xl:block grid place-items-center text-center top-[-14px] right-[-12px] w-5 h-5 rounded-full bg-primary-orange text-sm text-White">
              1
            </span>
          </div>
          <img src={imageAvatar} alt="Avatar" className="h-10 w-10" />
        </div>
      </nav>
      <Separator />
    </header>
  );
};
