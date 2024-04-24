import { imageProduct1 } from "../assets/images";
import { sneakers } from "../constants";
import { LightBoxSneaker } from "./LightBoxSneaker";
import { ReactComponent as CloseIcon } from "../assets/icons/icon-close.svg";
import { iconNext, iconPrevious } from "../assets/icons";
import { ButtonSneaker } from "./ButtonSneaker";

export const LightBox = () => {
  return (
    <section className="hidden">
      <div className="fixed top-0 right-0 w-full h-full bg-Black z-[999] bg-opacity-70 overflow-auto">
        <div className="absolute flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px] drop-shadow-[0_0px_10px_rgba(0,0,0,0.3)] mt-6">
          <CloseIcon
            fill="white"
            className="absolute top-[-20px] right-[60px]"
          />
          <div className="relative">
            <img
              src={imageProduct1}
              width={400}
              height={400}
              alt="Light box"
              className="rounded-md"
            />
            <ButtonSneaker position="left">
              <img src={iconPrevious} alt="..." />
            </ButtonSneaker>
            <ButtonSneaker position="right">
              <img src={iconNext} alt="..." />
            </ButtonSneaker>
          </div>
          <div className="flex gap-4 m-6 w-[400px]">
            {sneakers.map((sneaker, index) => (
              <div className="relative rounded-md" key={sneaker.bigshoe}>
                <div
                  className={`${
                    index === 0
                      ? "absolute bg-Grayish-blue top-0 left-0 w-full h-full opacity-50 rounded-md border-solid border-2 border-primary-orange"
                      : ""
                  }`}
                ></div>
                <div className="">
                  <LightBoxSneaker imgURL={sneaker} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
