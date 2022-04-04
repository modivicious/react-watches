import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Minicart from "../Minicart";
import useClickOutside from "../../hooks/useClickOutside";

import logo from "../../../images/logo.svg";

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
            <li className={styles.rightItem}>
              <Link className={`${styles.icon} ${styles.wish}`} to="wishlist">
                <span className="visuallyHidden">Избранное</span>
              </Link>
            </li>
            <li className={styles.rightItem} ref={clickOutsideCart}>
              <button
                className={`${styles.icon} ${styles.cart}`}
                type="button"
                data-qty={cartItems.length}
                onClick={onCartClick}
              >
                <span className="visuallyHidden">Корзина</span>
              </button>
              <CSSTransition
                in={isCartOpen}
                timeout={300}
                classNames="fade-in"
                unmountOnExit
              >
                <Minicart
                  opened={isCartOpen}
                  items={cartItems}
                  close={onCartClick}
                />
              </CSSTransition>
            </li>
            <li className={styles.rightItem}>
              <a className={`${styles.icon} ${styles.user}`} href="#">
                <span className="visuallyHidden">Личный кабинет</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
