import { sneakers } from "../constants";
import { ReactComponent as CloseIcon } from "../assets/icons/icon-close.svg";
import { iconNext, iconPrevious } from "../assets/icons";
import { ButtonSneaker } from "./ButtonSneaker";
import { useState } from "react";

export const LightBox = ({ lightBoxOpen }) => {
  const [isClose, setIsClose] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setIsClose((isClose) => !isClose);
  };

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

  // const currentSneaker = sneakers[currentIndex];

  return (
    <section className="relative">
      {isClose && (
        <div className="fixed top-0 right-0 w-full h-full bg-Black z-[999] bg-opacity-70 overflow-auto">
          <div className="absolute flex flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px] drop-shadow-[0_0px_10px_rgba(0,0,0,0.3)] mt-6">
            <div className="group">
              <CloseIcon
                className="absolute inset-y-[-15px] right-[10px] fill-white group-hover:fill-primary-orange group-active:fill-primary-orange"
                onClick={handleClick}
              />
            </div>

            <ButtonSneaker position="left">
              <img
                src={iconPrevious}
                alt="..."
                onClick={handlePrevious}
                className="fill-red-500"
              />
            </ButtonSneaker>
            <ButtonSneaker position="right">
              <img
                src={iconNext}
                alt="..."
                onClick={handleNext}
                className="fill-red-500"
              />
            </ButtonSneaker>

            {sneakers[currentIndex] && (
              <>
                <img
                  src={sneakers[currentIndex].bigsneaker}
                  width={400}
                  height={400}
                  alt={`sneaker ${currentIndex + 1}`}
                  className="rounded-md"
                />
                <div className="flex gap-4 p-4">
                  {sneakers.map((sneaker, index) => (
                    <div
                      className="relative"
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <div
                        className={`absolute cursor-grab ${
                          index === currentIndex
                            ? "bg-Grayish-blue top-0 left-0 w-full h-full opacity-50 rounded-md border-solid border-2 border-primary-orange"
                            : ""
                        } `}
                      ></div>
                      <img
                        src={sneaker.thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
