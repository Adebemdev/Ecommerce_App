export const LightBoxSneaker = ({ imgURL }) => {
  return (
    <div className="flex items-center bg-card bg-cover bg-center w-16 h-16 max-sm:py-1">
      <img
        src={imgURL.thumbnail}
        width={80}
        height={80}
        alt="lightbox sneaker"
        className="rounded-md"
      />
    </div>
  );
};
