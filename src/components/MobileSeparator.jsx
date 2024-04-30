import React from "react";

const MobileSeparator = ({ color = "#ced4da", height = 2 }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: height,
      }}
    />
  );
};

export default MobileSeparator;
