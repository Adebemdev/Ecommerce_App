export const Separator = ({ color = "#ced4da", height = 0.5 }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: height,
        border: "none",
      }}
    />
  );
};
