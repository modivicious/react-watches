import React, { useContext, useState } from "react";

import { AppContext } from "../../context";

import * as styles from "./Card.module.scss";

const Card = ({ name, price, imgUrl, productId, onAddToCart, onAddToWish }) => {
  const { isItemInCart, isItemInWish } = useContext(AppContext);

  const onCart = () => {
    onAddToCart({ name, price, imgUrl, productId });
  };

  const onWish = () => {
    onAddToWish({ name, price, imgUrl, productId });
  };

  return (
    <div className={styles.card}>
      <a className={styles.imageLink} href="#">
        <img className={styles.image} src={imgUrl} alt="Фото продукта" />
      </a>
      <div className={styles.descr}>
        <a className={styles.link} href="#">
          <h3 className={styles.name}>{name}</h3>
        </a>
        <div className={styles.bottom}>
          <span className={styles.price}>{price} руб.</span>
          <div className={styles.buttons}>
            <button
              className={`${styles.wish}
              ${isItemInWish(productId) ? styles.wishAdded : ""}`}
              onClick={onWish}
              type="button"
            >
              <span className="visuallyHidden">Добавить в желаемое</span>
            </button>
            <button
              className={`${styles.cart}
              ${isItemInCart(productId) ? styles.cartAdded : ""}`}
              onClick={onCart}
              type="button"
            >
              <span className="visuallyHidden">Добавить в корзину</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
