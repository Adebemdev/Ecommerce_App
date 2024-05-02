import React from "react";

const MobileSeparator = ({ color = "#ced4da", height = 2, className }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: height,
      }}
      className={`${className}`}
    />
  );
};

export default MobileSeparator;
