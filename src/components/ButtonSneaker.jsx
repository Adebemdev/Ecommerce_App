export const ButtonSneaker = ({ children, position }) => {
  return (
    <button
      className={`absolute ${
        position === "left" ? "left-[-5%]" : "right-[7%]"
      } h-10 w-10 bg-White rounded-full top-1/2 transform -translate-y-1/2 flex items-center justify-center`}
    >
      {children}
    </button>
  );
};
