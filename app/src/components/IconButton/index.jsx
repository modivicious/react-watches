import React from "react";
import cx from "classnames";

import * as styles from "./IconButton.module.scss";

const IconButton = ({
  icon,
  classNames,
  onClick,
  isActive,
  isDisabled = false,
  ariaLabel,
  ...attrs
}) => {
  return (
    <button
      className={cx(
        styles.btn,
        styles[icon],
        isActive && styles.active,
        classNames
      )}
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      aria-label={ariaLabel}
      {...attrs}
    />
  );
};

export default IconButton;
