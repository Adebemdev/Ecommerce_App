export const ButtonSneaker = ({ children, position }) => {
  return (
    <button
      className={`absolute ${
        position === "left" ? "left-[-2%]" : "right-[-2%]"
      } h-10 w-10 bg-White rounded-full top-[40%] transform fill-red-500 -translate-y-1/2 flex items-center z-10 justify-center`}
    >
      {children}
    </button>
  );
};
