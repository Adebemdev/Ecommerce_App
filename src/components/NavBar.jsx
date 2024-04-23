import { navLinks } from "../constants";
import { ReactComponent as Cartlink } from "../assets/icons/icon-cart.svg";
import { imageAvatar } from "../assets/images";
import { Separator } from "./Separator";

export const NavBar = () => {
  return (
    <header className="padding-nx w-[82%] m-auto">
      <nav className="flex-1 flex justify-between">
        <div className="flex justify-center items-center gap-16">
          <h1 className="text-2xl font-kumbh font-bold">Sneakers</h1>
          <ul className="sm:flex gap-4 justify-center items-center font-kumbh text-sm font-normal text-Grayish-blue mt-10">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="cursor-pointer hidden:border-b-2 border-b-orange-400 pb-4"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  items-center gap-8">
          <div className="relative">
            <Cartlink
              fill="#ced4da"
              stroke="#ced4da"
              className="font-normal cursor-pointer"
            />
            <span className="absolute grid place-items-center text-center top-[-16px] right-[-14px] w-5 h-5 rounded-full bg-primary-orange text-sm text-White">
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
