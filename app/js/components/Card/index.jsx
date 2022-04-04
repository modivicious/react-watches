import React, { useContext } from "react";
import ContentLoader from "react-content-loader";

import { AppContext } from "../../context";

import * as styles from "./Card.module.scss";

const Card = ({
  name,
  price,
  imgUrl,
  receiptDate,
  id,
  productId,
  onAddToCart,
  onAddToWish,
}) => {
  const { isItemInCart, isItemInWish, isLoaded } = useContext(AppContext);

  const obj = {
    name,
    price,
    imgUrl,
    receiptDate,
    id,
    productId,
  };

  const onCart = () => {
    onAddToCart(obj);
  };

  const onWish = () => {
    onAddToWish(obj);
  };

  return (
    <li className={styles.card}>
      {isLoaded ? (
        <>
          <a className={styles.imageLink} href="#">
            <img className={styles.image} src={imgUrl} alt="Фото продукта" />
          </a>
          <div className={styles.descr}>
            <a className={styles.link} href="#">
              <h3 className={styles.name}>{name}</h3>
            </a>
            <div className={styles.bottom}>
              <span className={styles.price}>{price} руб.</span>
              <div>
                <button
                  className={`${styles.wish} ${styles.cardBtn} ${
                    isItemInWish(productId) ? styles.wishAdded : ""
                  }`}
                  onClick={onWish}
                  type="button"
                >
                  <span className="visuallyHidden">Добавить в желаемое</span>
                </button>
                <button
                  className={`${styles.cart} ${styles.cardBtn} ${
                    isItemInCart(productId) ? styles.cartAdded : ""
                  }`}
                  onClick={onCart}
                  type="button"
                >
                  <span className="visuallyHidden">Добавить в корзину</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width={288}
          height={382}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="288" height="288" />
          <rect x="8" y="305" rx="3" ry="3" width="180" height="16" />
          <rect x="8" y="345" rx="3" ry="3" width="85" height="16" />
          <rect x="206" y="339" rx="3" ry="3" width="26" height="26" />
          <rect x="246" y="339" rx="3" ry="3" width="26" height="26" />
        </ContentLoader>
      )}
    </li>
  );
};

export default Card;
