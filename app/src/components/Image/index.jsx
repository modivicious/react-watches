import React from "react";

const Image = ({ classNames, src, alt, width, height, ...attrs }) => {
  return (
    <img
      className={classNames}
      width={width}
      height={height}
      src={src}
      alt={alt}
      {...attrs}
    />
  );
};

export default Image;
