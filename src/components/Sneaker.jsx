export const Sneaker = ({ imgURL }) => {
  return (
    <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-[90px] sm:h-[90px] rounded-md max-sm:py-1">
      <img
        src={imgURL.thumbnail}
        alt="Sneaker collections"
        width={100}
        height={100}
        className="object-contain flex-grow rounded-md"
      />
    </div>
  );
};
