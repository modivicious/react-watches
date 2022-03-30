import React, { useState } from "react";

import Minicart from "../Minicart";

import logo from "../../../images/logo.svg";
import favoriteIcon from "../../../images/icons/heart.svg";
import cartIcon from "../../../images/icons/cart.svg";
import userIcon from "../../../images/icons/user.svg";

import * as styles from "./Header.module.scss";

const Header = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartClick = () => {
    cartItems.length && setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a className={styles.logo} href="#">
            <img src={logo} alt="Логотип" />
          </a>
          <ul className={styles.right}>
            <li>
              <a className={styles.icon} href="#">
                <img src={favoriteIcon} alt="Избранное" />
              </a>
            </li>
            <li>
              <button
                className={`${styles.icon} ${styles.cart}`}
                type="button"
                data-qty={cartItems.length}
                onClick={onCartClick}
              >
                <img src={cartIcon} alt="Корзина" />
              </button>
              <Minicart
                opened={isCartOpen}
                items={cartItems}
                close={onCartClick}
              />
            </li>
            <li>
              <a className={styles.icon} href="#">
                <img src={userIcon} alt="Личный кабинет" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
