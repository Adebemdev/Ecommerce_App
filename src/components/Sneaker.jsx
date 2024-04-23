export const Sneaker = ({ imgURL }) => {
  return (
    <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-18 sm:h-18 rounded-md max-sm:py-1">
      <img
        src={imgURL.thumbnail}
        alt="Sneaker collections"
        width={80}
        height={80}
        className="object-contain flex-grow rounded-md"
      />
    </div>
  );
};
