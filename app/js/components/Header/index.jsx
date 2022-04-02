import React, { useState } from "react";
import { Link } from "react-router-dom";

import Minicart from "../Minicart";
import useClickOutside from "../../hooks/useClickOutside";

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

  const clickOutsideCart = useClickOutside(() => {
    setIsCartOpen(false);
  });

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <ul className={styles.right}>
            <li>
              <Link className={styles.icon} to="wishlist">
                <img src={favoriteIcon} alt="Избранное" />
              </Link>
            </li>
            <li ref={clickOutsideCart}>
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
