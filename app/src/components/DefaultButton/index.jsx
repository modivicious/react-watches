import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

const DefaultButton = ({
  children,
  classNames,
  onClick,
  isDisabled,
  ...attrs
}) => {
  const Tag = attrs.href ? "a" : attrs.to ? Link : "button";
  return (
    <Tag
      className={cx("linkBtn", classNames)}
      onClick={onClick}
      disabled={isDisabled}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

export default DefaultButton;
