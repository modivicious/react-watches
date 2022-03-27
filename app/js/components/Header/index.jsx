import React from "react";

import logo from "../../../images/logo.svg";
import favoriteIcon from "../../../images/icons/heart.svg";
import cartIcon from "../../../images/icons/cart.svg";
import userIcon from "../../../images/icons/user.svg";

import * as styles from "./Header.module.scss";

function Header() {
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
                data-qty="0"
              >
                <img src={cartIcon} alt="Корзина" />
              </button>
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
}

export default Header;
